
const fs = require('fs');
const BergfexContainer = require('../../src/BergfexContainer');
const SkiinfoJsonContainer = require('../../src/SkiinfoJsonContainer');
const BergfexStrgParser = require('../../src/BergfexStrgParser');
const SkiinfoJsonParser = require('../../src/SkiinfoJsonParser');



describe('test of all ski resorts', function () {

    it('simulate getSnowDataAndTell of index.js', function () {

        let parsers = [];
        const bergfexContainer = new BergfexContainer();
        parsers.push(new BergfexStrgParser(bergfexContainer));
        const skiinfoContainer = new SkiinfoJsonContainer();
        parsers.push(new SkiinfoJsonParser(skiinfoContainer));

        let cityArray = fs.readFileSync('../alexa_schema/slots_SKIGEBIETE.txt').toString().split('\r\n');
        // cityArray = ['Galtür']

        for (let i in cityArray) {

            let city = cityArray[i];
            city = city.trim();

            let promises = [];
            for (let parser of parsers) {
                parser.clear();
                promises.push(parser.getResourcePromise(city));
            }
            Promise.all(promises)
                .then(htmlPages => {
                    let dataCity;
                    for (let i = 0; i < htmlPages.length; i++) {
                        const htmlPage = htmlPages[i];
                        if (htmlPage) {
                            const snowdata = parsers[i].parse(htmlPage, city);
                            if (!dataCity && snowdata) {
                                dataCity = snowdata.city;
                            }
                            if (dataCity) {
                                dataCity = dataCity.toLowerCase();
                            }
                        }
                    }
                    if (dataCity) {
                        dataCity = dataCity.toLowerCase();
                    }
                    expect(dataCity).toBe(city);
                }).catch(() => {
                    console.warn(' -- t7 -- WARN -- no resort for: ', city);
                });
        }

        setTimeout(function () {
            console.log('...waited')
        }, 1000)


    });

});