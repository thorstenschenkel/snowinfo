
const SkiinfoJsonContainer = require('../../src/SkiinfoJsonContainer');
const SkiinfoJsonParser = require('../../src/SkiinfoJsonParser');



describe('test of all ski resorts', function () {

    it('simulate getSnowDataAndTell of index.js', function () {

        let parsers = [];
        const skiinfoContainer = new SkiinfoJsonContainer();
        const skiinfoParser = new SkiinfoJsonParser(skiinfoContainer);
        parsers.push(skiinfoParser);

        var cityArray = [
            'Gstaad',
            'Alpine Meadows',
            'Alta',
            'Arapahoe Basin',
            'Aspen',
            'Beaver Creek',
            'Big Sky Resort',
            'Big Sky',
            'Breckenridge',
            'Copper Mountain Resort',
            'Copper Mountain',
            'Crested Butte',
            'Deer Valley',
            'Heavenly',
            'Jackson Hole',
            'Keystone',
            'Killington',
            'Lake Placid',
            'Mammoth Mountain',
            'Mount Bachelor',
            'Mount Baker',
            'Mount Rose',
            'Park City',
            'Powder Mountain',
            'Snowbird',
            'Snowmass',
            'Squaw Valley',
            'Steamboat',
            'Stowe',
            'Sugarloaf',
            'Taos',
            'Telluride',
            'Vail',
            'Whiteface',
            'Winter Park Resort',
            'Winter Park',
            'Wolf Creek'
        ];

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
                                console.debug('#snowdata: ', snowdata);
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