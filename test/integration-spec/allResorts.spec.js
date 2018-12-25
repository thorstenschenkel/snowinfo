
const fs = require('fs');
const BergfexContainer = require('../../src/BergfexContainer');
const SkiinfoContainer = require('../../src/SkiinfoContainer');
const BergfexStrgParser = require('../../src/BergfexStrgParser');
const SkiinfoStrgParser = require('../../src/SkiinfoStrgParser');



describe('test of all ski resorts', function () {

    it('simulate getSnowDataAndTell of index.js', function () {

        let parsers = [];
        const bergfexContainer = new BergfexContainer();
        parsers.push(new BergfexStrgParser(bergfexContainer));
        const skiinfoContainer = new SkiinfoContainer();
        parsers.push(new SkiinfoStrgParser(skiinfoContainer));

        var cityArray = fs.readFileSync('../alexa_schema/slots_SKIGEBIETE.txt').toString().split('\r\n');

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
                            const snowdata = parsers[i].parseHtml(htmlPage, city);
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

    });

});