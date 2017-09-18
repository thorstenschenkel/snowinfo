
const fs = require('fs');
const BergfexContainer = require('../../src/BergfexContainer');
const SkiinfoContainer = require('../../src/SkiinfoContainer');
const BergfexStrgParser = require('../../src/BergfexStrgParser');
const SkiinfoStrgParser = require('../../src/SkiinfoStrgParser');



describe('test of all ski resorts', function () {

    it('simulate getSnowDataAndTell of index.js', function () {

        const bergfexContainer = new BergfexContainer();
        const skiinfoContainer = new SkiinfoContainer();

        var cityArray = fs.readFileSync('../alexa_schema/slots_SKIGEBIETE.txt').toString().split('\r\n');
        for (let i in cityArray) {
            let city = cityArray[i];
            city = city.trim();

            const bergfexParser = new BergfexStrgParser(bergfexContainer);
            bergfexParser.getHtmlPage(city, (html) => {

                let snowdataBergfex;
                if (html) {
                    snowdataBergfex = bergfexParser.parseHtml(html, city);
                }
                if (snowdataBergfex && !snowdataBergfex.isOutdated()) {
                    // hanldeSchneeInfo(city, snowdataBergfex);
                } else {
                    const skiinfoParser = new SkiinfoStrgParser(skiinfoContainer);
                    skiinfoParser.getHtmlPage(city, (html) => {
                        let snowdataSkiinfo;
                        if (html) {
                            snowdataSkiinfo = skiinfoParser.parseHtml(html, city);
                        }
                        let dataCity;
                        if ( !dataCity && snowdataBergfex ) {
                            dataCity = snowdataBergfex.city;
                        }
                        if ( !dataCity && snowdataSkiinfo ) {
                            dataCity = snowdataSkiinfo.city;
                        }
                        if ( dataCity ) {
                            dataCity = dataCity.toLowerCase();
                        }
                        expect(dataCity).toBe(city);
                    });
                }
            });

        }


    });

});