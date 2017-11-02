const WebDataContainer = require('./WebDataContainer');

class BergfexContainer extends WebDataContainer {

    getProtocol() {
        return 'https';
    }

    constructor() {

        super('bergfex');

        // Alpbach - Ski Juwel Alpbachtal Wildschönau
        this.pushObject({
            city: 'Alpbach',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Alpbach', 'Ski', 'Juwel', 'Alpbachtal', 'Wildschönau'],
            searchStrg: 'Alpbach - Ski Juwel Alpbachtal Wildschönau',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Alpbachtal',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Alpbach', 'Ski', 'Juwel', 'Alpbachtal', 'Wildschönau'],
            searchStrg: 'Alpbach - Ski Juwel Alpbachtal Wildschönau',
            speechstart: 'Im'
        });
        // Snow Space Salzburg - Flachau - Wagrain - Alpendorf - Ski amade
        this.pushObject({
            city: 'Alpendorf',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Snow', 'Space', 'Salzburg', 'Flachau', 'Wagrain', 'Alpendorf', 'Ski amade'],
            searchStrg: '', // TODO
            speechstart: 'In'
        });
        // Radstadt - Altenmarkt - Ski amade
        this.pushObject({
            city: 'Altenmarkt',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Radstadt', 'Altenmarkt', 'Ski', 'amade'],
            searchStrg: 'Radstadt - Altenmarkt - Ski amade',
            speechstart: 'In'
        });
        // Ankogel - Mallnitz
        this.pushObject({
            city: 'Ankogel',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Ankogel', 'Mallnitz'],
            searchStrg: 'Ankogel - Mallnitz',
            speechstart: 'In'
        });
        // Arosa Lenzerheide
        this.pushObject({
            city: 'Arosa',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            search: ['Arosa', 'Lenzerheide'],
            searchStrg: 'Arosa Lenzerheide',
            speechstart: 'In'
        });
        // Bergeralm
        this.pushObject({
            city: 'Bergeralm',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Bergeralm', 'Steinach', 'Brenner'],
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'Auf der'
        });
        // Tauplitz / Bad Mitterndorf - Schneebären
        this.pushObject({
            city: 'Bad Mitterndorf',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Tauplitz', 'Mitterndorf', 'Schneebären'],
            searchStrg: 'Tauplitz / Bad Mitterndorf - Schneebären',
            speechstart: 'In'
        });
        // St. Moritz - Corviglia
        this.pushObject({
            city: 'Corviglia',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            search: ['Moritz', 'Corviglia'],
            searchStrg: 'St. Moritz - Corviglia',
            speechstart: 'In'
        });
        // Dachstein Gletscher
        this.pushObject({
            city: 'Dachstein Gletscher',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Dachstein', 'Gletscher'],
            searchStrg: 'Dachstein Gletscher Schladming Ramsau - Ski amade',
            speechstart: 'Auf dem'
        });
        // Elferbahnen Neustift / Stubaital
        this.pushObject({
            city: 'Elferbahnen',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Elferbahnen', 'Neustift', 'Stubaital'],
            searchStrg: 'Elferbahnen Neustift / Stubaital',
            speechstart: 'Im Skigebiet'
        });
        // Fageralm / Forstau - Ski amade
        this.pushObject({
            city: 'Fageralm',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Fageralm', 'Forstau', 'Ski', 'amade'],
            searchStrg: 'Fageralm / Forstau - Ski amade',
            speechstart: 'Auf der'
        });
        // Flims Laax Falera
        this.pushObject({
            city: 'Falera',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            search: ['Flims', 'Laax', 'Falera'],
            searchStrg: 'Flims Laax Falera',
            speechstart: 'In'
        });
        // Kleinwalsertal - Kanzelwand - Fellhorn
        this.pushObject({
            city: 'Fellhorn',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Kleinwalsertal', 'Kanzelwand', 'Fellhorn'],
            speechstart: 'Im',
            speechskiresort: 'Fellhorn - Kanzelwand'
        });
        // Fendels
        this.pushObject({
            city: 'Fendels',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Fendels', 'Ried', 'Prutz'],
            searchStrg: 'Fendels - Ried - Prutz',
            speechstart: 'In'
        });
        // Fieberbrunn
        this.pushObject({
            city: 'Fieberbrunn',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Fieberbrunn', 'Saalbach', 'Hinterglemm', 'Leogang'],
            searchStrg: 'Fieberbrunn - Saalbach Hinterglemm Leogang',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Flachau',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Snow', 'Space', 'Salzburg', 'Flachau', 'Wagrain', 'Alpendorf', 'Ski amade'],
            searchStrg: '', // TODO
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Fliess',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Landeck', 'Zams', 'Fliess', 'Venetregion'],
            searchStrg: 'Landeck - Zams - Fliess / Venetregion',
            speechstart: 'In'
        });
        // Flims Laax Falera
        this.pushObject({
            city: 'Flims',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            search: ['Flims', 'Laax', 'Falera'],
            searchStrg: 'Flims Laax Falera',
            speechstart: 'In'
        });
        // Fageralm / Forstau - Ski amade
        this.pushObject({
            city: 'Forstau',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Fageralm', 'Forstau', 'Ski', 'amade'],
            searchStrg: 'Fageralm / Forstau - Ski amade',
            speechstart: 'In'
        });
        // Fügen - Spieljoch
        this.pushObject({
            city: 'Fügen',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Fügen', 'Spieljoch'],
            searchStrg: 'Fügen - Spieljoch',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Galtür',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Galtür', 'Paznaun-Ischgl'],
            searchStrg: 'Galtür / Paznaun-Ischgl',
            speechstart: 'In'
        });
        //  Golm im Montafon
        this.pushObject({
            city: 'Golm',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Golm', 'im', 'Montafon'],
            searchStrg: 'Golm im Montafon',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Golm im Montafon',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Golm', 'im', 'Montafon'],
            searchStrg: 'Golm im Montafon',
            speechstart: 'In'
        });
        // Grimentz - Zinal
        this.pushObject({
            city: 'Grimentz',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            search: ['Zinal', 'Grimentz'],
            searchStrg: 'Zinal',
            speechstart: 'In'
        });
        // Jungfrau Ski Region Grindelwald - Wengen
        this.pushObject({
            city: 'Grindelwald',
            host: 'www.bergfex.ch', path: '/berneroberland/schneewerte/',
            search: ['Jungfrau', 'Grindelwald', 'Wengen'],
            searchStrg: 'Jungfrau Ski Region Grindelwald - Wengen',
            speechstart: 'In'
        });
        // Kasberg - Grünau im Almtal
        this.pushObject({
            city: 'Grünau',
            host: 'www.bergfex.at', path: '/oberoesterreich/schneewerte/',
            search: ['Kasberg', 'Grünau', 'Almtal'],
            searchStrg: 'Kasberg - Grünau im Almtal',
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Grünau im Almtal',
            host: 'www.bergfex.at', path: '/oberoesterreich/schneewerte/',
            search: ['Kasberg', 'Grünau', 'Almtal'],
            searchStrg: 'Kasberg - Grünau im Almtal',
            speechstart: 'Im'
        });
        // Hauser Kaibling / Schladming - Ski amade
        this.pushObject({
            city: 'Hauser Kaibling',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Hauser', 'Kaibling', 'Schladming', 'Ski', 'amade'],
            searchStrg: 'Hauser Kaibling / Schladming - Ski amade',
            speechstart: 'In'
        });
        // Heiligenblut - Grossglockner
        this.pushObject({
            city: 'Heiligenblut',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Heiligenblut', 'Grossglockner'],
            searchStrg: 'Heiligenblut - Grossglockner',
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Heuberg',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Walmendingerhorn', 'Ifen', 'Heuberg'],
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Hintertux',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Hintertuxer', 'Gletscher', 'Hintertux'],
            searchStrg: 'Hintertuxer Gletscher / Hintertux',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Hintertuxer Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Hintertuxer', 'Gletscher', 'Hintertux'],
            searchStrg: 'Hintertuxer Gletscher / Hintertux',
            speechstart: 'Auf dem'
        });
        // Hochficht - Böhmerwald
        this.pushObject({
            city: 'Hochficht',
            host: 'www.bergfex.at', path: '/oberoesterreich/schneewerte/',
            search: ['Hochficht', 'Böhmerwald'],
            searchStrg: 'Hochficht - Böhmerwald',
            speechstart: 'In'
        });
        // Hochkrimml
        this.pushObject({
            city: 'Hochkrimml',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Krimml', 'Hochkrimml', 'Zillertal', 'Arena'],
            searchStrg: 'Krimml / Hochkrimml – Zillertal Arena',
            speechstart: 'In'
        });
        // Hochwurzen / Schladming - Ski amade
        this.pushObject({
            city: 'Hochwurzen',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Hochwurzen', 'Schladming', 'Ski', 'amade'],
            searchStrg: 'Hochwurzen / Schladming - Ski amade',
            speechstart: 'In'
        });
        // Hochzeiger - Jerzens im Pitztal
        this.pushObject({
            city: 'Hochzeiger',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Hochzeiger', 'Jerzens', 'Pitztal'],
            searchStrg: 'Hochzeiger - Jerzens im Pitztal',
            speechstart: 'Im Skigebiet'
        });
        // Hochzillertal
        this.pushObject({
            city: 'Hochzillertal',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Hochzillertal'],
            searchStrg: 'Hochzillertal'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Ifen',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Walmendingerhorn', 'Ifen', 'Heuberg'],
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'In'
        });
        // Innsbruck Igls - Patscherkofel
        this.pushObject({
            city: 'Igls',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Innsbruck', 'Igls', 'Patscherkofel'],
            searchStrg: 'Innsbruck Igls - Patscherkofel',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Ischgl',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Ischgl'],
            searchStrg: 'Ischgl',
            speechstart: 'In'
        });
        // Hochzeiger - Jerzens im Pitztal
        this.pushObject({
            city: 'Jerzens',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Hochzeiger', 'Jerzens', 'Pitztal'],
            searchStrg: 'Hochzeiger - Jerzens im Pitztal',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Jungholz',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Jungholz'],
            searchStrg: 'Jungholz',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Kals',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Kals', 'Resorts', 'Kals-Matrei'],
            searchStrg: 'Kals - GG Resorts Kals-Matrei',
            speechstart: 'In'
        });
        // Kleinwalsertal - Kanzelwand - Fellhorn
        this.pushObject({
            city: 'Kanzelwand',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Kleinwalsertal', 'Kanzelwand', 'Fellhorn'],
            searchStrg: 'Kleinwalsertal - Kanzelwand - Fellhorn',
            speechstart: 'Im',
            speechskiresort: 'Fellhorn - Kanzelwand'
        });
        this.pushObject({
            city: 'Kappl',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Kappl', 'Paznaun-Ischgl'],
            searchStrg: 'Kappl / Paznaun-Ischgl',
            speechstart: 'In'
        });
        // Kitzsteinhorn - Kaprun
        this.pushObject({
            city: 'Kaprun',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Kitzsteinhorn', 'Kaprun'],
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Auf dem',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        this.pushObject({
            city: 'Kaprun Kitzsteinhorn',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Kitzsteinhorn', 'Kaprun'],
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'In'
        });       
        // Kasberg - Grünau im Almtal
        this.pushObject({
            city: 'Kasberg',
            host: 'www.bergfex.at', path: '/oberoesterreich/schneewerte/',
            search: ['Kasberg', 'Grünau', 'Almtal'],
            searchStrg: 'Kasberg - Grünau im Almtal',
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Kaunertal',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Kaunertaler', 'Gletscher', 'Kaunertal'],
            searchStrg: 'Kaunertaler Gletscher / Kaunertal',
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Kaunertaler Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Kaunertaler', 'Gletscher', 'Kaunertal'],
            searchStrg: 'Kaunertaler Gletscher / Kaunertal',
            speechstart: 'Auf dem'
        });
        this.pushObject({
            city: 'Kitzbühel',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Kitzbühel', 'Kirchberg'],
            searchStrg: 'Kitzbühel - Kirchberg',
            speechstart: 'In'
        });
        // Kitzsteinhorn - Kaprun
        this.pushObject({
            city: 'Kitzsteinhorn',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Kitzsteinhorn', 'Kaprun'],
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Auf dem'
        });
        this.pushObject({
            city: 'Kitzsteinhorn Kaprun',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Kitzsteinhorn', 'Kaprun'],
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Auf dem'
        });
        // Kleinwalsertal - Kanzelwand - Fellhorn
        this.pushObject({
            city: 'Kleinwalsertal',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Kleinwalsertal', 'Kanzelwand', 'Fellhorn'],
            searchStrg: 'Kleinwalsertal - Kanzelwand - Fellhorn',
            speechstart: 'Im'
        });
        // Koralpe
        this.pushObject({
            city: 'Koralpe',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Koralpe'],
            searchStrg: 'Koralpe',
            speechstart: 'In'
        });
        // Kreischberg / Murau
        this.pushObject({
            city: 'Kreischberg',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Kreischberg', 'Murau'],
            searchStrg: 'Kreischberg / Murau',
            speechstart: 'Auf dem'
        });
        // Krimml
        this.pushObject({
            city: 'Krimml',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Krimml', 'Hochkrimml', 'Zillertal', 'Arena'],
            searchStrg: 'Krimml / Hochkrimml – Zillertal Arena',
            speechstart: 'In'
        });
        // Flims Laax Falera
        this.pushObject({
            city: 'Laax',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            search: ['Flims', 'Laax', 'Falera'],
            searchStrg: 'Flims Laax Falera',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Landeck',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Landeck', 'Zams', 'Fliess', 'Venetregion'],
            searchStrg: 'Landeck - Zams - Fliess / Venetregion ',
            speechstart: 'Auf dem'
        });
        // Arosa Lenzerheide
        this.pushObject({
            city: 'Lenzerheide',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            search: ['Arosa', 'Lenzerheide'],
            searchStrg: 'Arosa Lenzerheide',
            speechstart: 'In'
        });
        // Leogang
        this.pushObject({
            city: 'Leogang',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Fieberbrunn', 'Saalbach', 'Hinterglemm', 'Leogang'],
            searchStrg: 'Leogang - Saalbach Hinterglemm Fieberbrunn',
            speechstart: 'In'
        });
        // Ankogel - Mallnitz
        this.pushObject({
            city: 'Mallnitz',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Ankogel', 'Mallnitz'],
            searchStrg: 'Ankogel - Mallnitz',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Matrei ',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Matrei ', 'Resorts', 'Kals-Matrei'],
            searchStrg: 'Matrei  - GG Resorts Kals-Matrei',
            speechstart: 'In'
        });
        // Mayrhofen - Zillertal
        this.pushObject({
            city: 'Mayrhofen ',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Mayrhofen ', 'Zillertal'],
            searchStrg: 'Mayrhofen - Zillertal',
            speechstart: 'In'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Montafon',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Silvretta', 'Montafon'],
            searchStrg: 'Silvretta Montafon',
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Silvretta Montafon'
        });
        this.pushObject({
            city: 'Mölltaler Gletscher',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Mölltaler', 'Gletscher'],
            searchStrg: 'Mölltaler Gletscher',
            speechstart: 'Auf dem'
        });
        // Kreischberg / Murau
        this.pushObject({
            city: 'Murau',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Kreischberg', 'Murau'],
            searchStrg: 'Kreischberg / Murau',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Nassfeld',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Nassfeld'],
            searchStrg: 'Nassfeld',
            speechstart: 'In'
        });
        // Elferbahnen Neustift / Stubaital
        this.pushObject({
            city: 'Neustift',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Elferbahnen', 'Neustift', 'Stubaital'],
            searchStrg: 'Elferbahnen Neustift / Stubaital',
            speechstart: 'In'
        });
        // Niederalpl
        this.pushObject({
            city: 'Niederalpl',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Niederalpl'],
            searchStrg: 'Niederalpl',
            speechstart: 'Auf der'
        });
        // Umhausen - Niederthai
        this.pushObject({
            city: 'Niederthai',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Umhausen', 'Niederthai'],
            searchStrg: 'Umhausen - Niederthai',
            speechstart: 'In'
        });
        // Petzen - Feistritz ob Bleiburg
        this.pushObject({
            city: 'Petzen',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Petzen', 'Feistritz', 'ob', 'Bleiburg'],
            searchStrg: 'Petzen - Feistritz ob Bleiburg',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Pitztal',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Pitztaler', 'Gletscher', 'Rifflsee', 'Pitztal'],
            searchStrg: 'Pitztaler Gletscher - Rifflsee / Pitztal',
            speechstart: 'Auf dem',
            speechskiresort: 'Pitztaler Gletscher'
        });
        this.pushObject({
            city: 'Pitztaler Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Pitztaler', 'Gletscher', 'Rifflsee', 'Pitztal'],
            searchStrg: 'Pitztaler Gletscher - Rifflsee / Pitztal',
            speechstart: 'Auf dem'
        });
        // Planai / Schladming - Ski amade
        this.pushObject({
            city: 'Planai',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Planai', 'Schladming', 'Ski', 'amade'],
            searchStrg: 'Planai / Schladming - Ski amade',
            speechstart: 'Auf der'
        });
        // Postalm Arena am Wolfgangsee
        this.pushObject({
            city: 'Postalm',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Postalm', 'Arena', 'Wolfgangsee'],
            searchStrg: 'Postalm Arena am Wolfgangsee',
            speechstart: 'Auf der'
        });
        // Postalm Arena am Wolfgangsee
        this.pushObject({
            city: 'Postalm Arena',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Postalm', 'Arena', 'Wolfgangsee'],
            searchStrg: 'Postalm Arena am Wolfgangsee',
            speechstart: 'In der'
        });
        // Radstadt - Altenmarkt - Ski amade
        this.pushObject({
            city: 'Radstadt',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Radstadt', 'Altenmarkt', 'Ski', 'amade'],
            searchStrg: 'Radstadt - Altenmarkt - Ski amade',
            speechstart: 'In'
        });
        // Raurisertal - Hochalmbahnen
        this.pushObject({
            city: 'Rauris',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Raurisertal', 'Hochalmbahnen'],
            searchStrg: 'Raurisertal - Hochalmbahnen',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Raurisertal',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Raurisertal', 'Hochalmbahnen'],
            searchStrg: 'Raurisertal - Hochalmbahnen',
            speechstart: 'Im'
        });
        // Saas-Fee
        this.pushObject({
            city: 'Saas-Fee',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            search: ['Saas-Fee'],
            searchStrg: 'Saas-Fee',
            speechstart: 'In'
        });
        // Samnaun
        this.pushObject({
            city: 'Samnaun',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            search: ['Samnaun'],
            searchStrg: 'Samnaun',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Sankt Johann',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Sankt', 'Johann', 'Tirol'],
            searchStrg: 'St. Johann in Tirol',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Sankt Johann in Tirol',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Sankt', 'Johann', 'Tirol'],
            searchStrg: 'St. Johann in Tirol',
            speechstart: 'In'
        });
        // St. Moritz - Corviglia
        this.pushObject({
            city: 'Sankt Moritz',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            search: ['Moritz', 'Corviglia'],
            searchStrg: 'St. Moritz - Corviglia',
            speechstart: 'In'
        });
        // Simonhöhe - Sankt Urban
        this.pushObject({
            city: 'Sankt Urban',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Simonhöhe', 'Sankt', 'Urban'],
            searchStrg: 'Simonhöhe - Sankt Urban',
            speechstart: 'In',
        });
        // Schetteregg
        this.pushObject({
            city: 'Schetteregg',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Schetteregg'],
            searchStrg: 'Schetteregg',
            speechstart: 'In'
        });                
        // Planai / Schladming - Ski amade
        this.pushObject({
            city: 'Schladming',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Planai', 'Schladming', 'Ski', 'amade'],
            searchStrg: 'Planai / Schladming - Ski amade',
            speechstart: 'In'
        });
        // Schlick 2000
        this.pushObject({
            city: 'Schlick',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Schlick', '2000',],
            searchStrg: 'Schlick 2000',
            speechstart: 'In'
        });
        // Schlick 2000
        this.pushObject({
            city: 'Schlick 2000',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Schlick', '2000',],
            searchStrg: 'Schlick 2000',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Schmitten',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Zell', 'am', 'See', 'Schmitten'],
            searchStrg: 'Schmitten - Zell am See',
            speechstart: 'In'
        });
        // Sillian
        this.pushObject({
            city: 'Sillian',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Sillian', 'Hochpustertal'],
            searchStrg: 'Sillian - Hochpustertal'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Silvretta Montafon',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Silvretta', 'Montafon'],
            searchStrg: 'Silvretta Montafon',
            speechstart: 'Im Skigebiet'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Silvretta',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Silvretta', 'Montafon'],
            speechstart: 'Im Skigebiet',
            searchStrg: 'Silvretta Montafon',
            speechskiresort: 'Silvretta Montafon'
        });
        // Simonhöhe - Sankt Urban
        this.pushObject({
            city: 'Simonhöhe',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Simonhöhe', 'Sankt', 'Urban'],
            searchStrg: 'Simonhöhe - Sankt Urban',
            speechstart: 'Auf der',
        });
        this.pushObject({
            city: 'Sölden',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Sölden'],
            searchStrg: 'Sölden',
            speechstart: 'In'
        });
        // Fügen - Spieljoch
        this.pushObject({
            city: 'Spieljoch',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Fügen', 'Spieljoch'],
            searchStrg: 'Fügen - Spieljoch',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Steinach',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Bergeralm', 'Steinach', 'Brenner'],
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        // Waidring - Steinplatte
        this.pushObject({
            city: 'Steinplatte',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Waidring', 'Steinplatte'],
            searchStrg: 'Waidring - Steinplatte',
            speechstart: 'Auf der'
        });
        this.pushObject({
            city: 'Steinach am Brenner',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Bergeralm', 'Steinach', 'Brenner'],
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        // Stoderzinken - Ski amade
        this.pushObject({
            city: 'Stoderzinken',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Stoderzinken', 'Ski', 'amade'],
            searchStrg: 'Stoderzinken - Ski amade',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Stubaital',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Stubaier', 'Gletscher', 'Stubaital'],
            searchStrg: 'Stubaier Gletscher / Stubaital',
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Stubaier Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Stubaier', 'Gletscher', 'Stubaital'],
            searchStrg: 'Stubaier Gletscher / Stubaital',
            speechstart: 'Auf dem'
        });
        // Tauplitz / Bad Mitterndorf - Schneebären
        this.pushObject({
            city: 'Tauplitz',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Tauplitz', 'Mitterndorf', 'Schneebären'],
            searchStrg: 'Tauplitz / Bad Mitterndorf - Schneebären',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Turracher Höhe',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Turracher', 'Höhe'],
            searchStrg: 'Turracher Höhe',
            speechstart: 'Auf der'
        });
        // Umhausen - Niederthai
        this.pushObject({
            city: 'Umhausen',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Umhausen', 'Niederthai'],
            searchStrg: 'Umhausen - Niederthai',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Vent',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Vent'],
            searchStrg: 'Vent',
            speechstart: 'In'
        });
        // Waidring - Steinplatte
        this.pushObject({
            city: 'Waidring',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Waidring', 'Steinplatte'],
            searchStrg: 'Waidring - Steinplatte',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Wagrain',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Snow', 'Space', 'Salzburg', 'Flachau', 'Wagrain', 'Alpendorf', 'Ski amade'],
            searchStrg: '', // TODO
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Walmendingerhorn',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Walmendingerhorn', 'Ifen', 'Heuberg'],
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'Im'
        });
        // Jungfrau Ski Region Grindelwald - Wengen
        this.pushObject({
            city: 'Wengen',
            host: 'www.bergfex.ch', path: '/berneroberland/schneewerte/',
            search: ['Jungfrau', 'Grindelwald', 'Wengen'],
            searchStrg: 'Jungfrau Ski Region Grindelwald - Wengen',
            speechstart: 'In'
        });
        // Waidring - Steinplatte
        this.pushObject({
            city: 'Winklmoosalm',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Waidring', 'Steinplatte'],
            searchStrg: 'Waidring - Steinplatte',
            speechstart: 'Auf der'
        });
        this.pushObject({
            city: 'Zams',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Landeck', 'Zams', 'Fliess', 'Venetregion'],
            searchStrg: 'Landeck - Zams - Fliess / Venetregion',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Zell am See',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Zell', 'am', 'See', 'Schmitten'],
            searchStrg: 'Schmitten - Zell am See',
            speechstart: 'In'
        });
        // Zell am Ziller - Zillertal Arena
        this.pushObject({
            city: 'Zell am Ziller',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Zell', 'am', 'Ziller', 'Zillertal', 'Arena'],
            searchStrg: 'Zell am Ziller - Zillertal Arena',
            speechstart: 'In'
        });
        // Zermatt
        this.pushObject({
            city: 'Zermatt',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            search: ['Zermatt'],
            searchStrg: 'Zermatt',
            speechstart: 'In'
        });
        // Zell am Ziller - Zillertal Arena
        this.pushObject({
            city: 'Zillertal Arena',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Zell', 'am', 'Ziller', 'Zillertal', 'Arena'],
            searchStrg: 'Zell am Ziller - Zillertal Arena',
            speechstart: 'In der'
        });
        // Grimentz - Zinal
        this.pushObject({
            city: 'Zinal',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            search: ['Zinal', 'Grimentz'],
            searchStrg: 'Zinal',
            speechstart: 'In'
        });
    }

}

module.exports = BergfexContainer;