
const SkiinfoJsonContainer = require('../../src/SkiinfoJsonContainer');
const SkiinfoJsonParser = require('../../src/SkiinfoJsonParser');



describe('test of all ski resorts', function () {

    it('simulate getSnowDataAndTell of index.js', function () {

        let parsers = [];
        const skiinfoContainer = new SkiinfoJsonContainer();
        const skiinfoParser = new SkiinfoJsonParser(skiinfoContainer);
        parsers.push(skiinfoParser);

        var cityArray = ['Albeck',
        'Alberschwende',
        'Alpbach',
        'Alpbachtal',
        'Alpendorf',
        'Altaussee',
        'Altenmarkt',
        'Andelsbuch',
        'Ankogel',
        'Annaberg',
        'Axamer Lizum',
        'Bad Hofgastein',
        'Bad Kleinkirchheim',
        'Bergeralm',
        'Berwang',
        'Biberwier',
        'Bichlbach',
        'Brand',
        'Brandnertal',
        'Brixen im Thale',
        'Buchensteinwand',
        'Bödele',
        'Bürserberg',
        'Christlum',
        'Dachstein Gletscher',
        'Damüls - Mellau',
        'Damüls',
        'Diedamskopf',
        'Dreiländereck',
        'Ellmau',
        'Falkert',
        'Fanningberg',
        'Faschina Fontanella',
        'Faschina',
        'Fendels',
        'Feuerkogel',
        'Fieberbrunn',
        'Filzmoos',
        'Finkenberg',
        'Fiss',
        'Flachau',
        'Flachauwinkl',
        'Fliess',
        'Fontanella',
        'Fügen',
        'Gaberl',
        'Galtür',
        'Gargellen',
        'Gerlitzen',
        'Gerlos',
        'Glungezer',
        'Goldeck',
        'Goldegg',
        'Golm',
        'Grebenzen',
        'Großarl',
        'Großarltal',
        'Großeck',
        'Grünau im Almtal',
        'Grünau',
        'Hauser Kaibling',
        'Heuberg',
        'Heutal',
        'Hinterglemm',
        'Hinterstoder',
        'Hintertux',
        'Hintertuxer Gletscher',
        'Hittisau',
        'Hoch Imst',
        'Hoch Ybrig',
        'Hoch-Imst',
        'Hoch-Ybrig',
        'Hochficht',
        'Hochfügen',
        'Hochgurgl',
        'Hochkar',
        'Hochkönig',
        'Hochkössen',
        'Hochoetz',
        'Hochrindl',
        'Hochstein',
        'Hochwurzen',
        'Hochzeiger',
        'Hopfgarten',
        'Ifen',
        'Imst',
        'Ischgl',
        'Itter',
        'Jerzens',
        'Jungholz',
        'Kappl',
        'Kaprun Kitzsteinhorn',
        'Kaprun',
        'Kasberg',
        'Katschberg',
        'Kaunertal',
        'Kaunertaler Gletscher',
        'Kelchsau',
        'Kitzbühel',
        'Kitzsteinhorn Kaprun',
        'Kitzsteinhorn',
        'Kleinarl',
        'Klippitztörl',
        'Koralpe',
        'Kreischberg',
        'Kristberg',
        'Kühtai',
        'Lachtal',
        'Ladis',
        'Landeck',
        'Laterns',
        'Lech am Arlberg',
        'Lech',
        'Leogang',
        'Lermoos',
        'Lienz',
        'Mallnitz',
        'Maurach',
        'Mayrhofen',
        'Melchsee',
        'Montafon',
        'Muttereralm',
        'Mölltaler Gletscher',
        'Nassfeld',
        'Nauders',
        'Obergurgl',
        'Obertilliach',
        'Pertisau',
        'Petzen',
        'Pitztal',
        'Pitztaler Gletscher',
        'Planai',
        'Planneralm',
        'Präbichl',
        'Radstadt',
        'Ramsau am Dachstein',
        'Ramsau',
        'Rauris',
        'Riesneralm',
        'Rifflsee',
        'Saalbach',
        'Salzstiegl',
        'Sankt Anton am Arlberg',
        'Sankt Anton',
        'Sankt Jakob im Defereggental',
        'Sankt Jakob',
        'Sankt Johann im Pongau',
        'Sankt Lambrecht',
        'Sankt Oswald',
        'Scheffau',
        'Schladming',
        'Schlick 2000',
        'Schlick',
        'Schmitten',
        'Schmittenhöhe',
        'Schröcken',
        'Schwarzenberg',
        'See',
        'Serfaus',
        'Silbertal',
        'Sillian',
        'Silvretta Montafon',
        'Simonhöhe',
        'Sirnitz',
        'Sonnenkopf',
        'Speiereck',
        'Steinach am Brenner',
        'Steinach am Brenner',
        'Stubaier Gletscher',
        'Stubaital',
        'Stuben am Arlberg',
        'Stuben',
        'Sölden',
        'Söll',
        'Tauplitz',
        'Tauplitzalm',
        'Turracher Höhe',
        'Tux',
        'Venet',
        'Vent',
        'Wagrain',
        'Walchsee',
        'Walmendingerhorn',
        'Warth',
        'Weinebene',
        'Werfenweng',
        'Westendorf',
        'Wildkogel',
        'Wildschönau',
        'Wurzeralm',
        'Zahmer Kaiser',
        'Zams',
        'Zauchensee',
        'Zell am See',
        'Zell am Ziller',
        'Zettersfeld',
        'Zillertal Arena',
        'Zürs'
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