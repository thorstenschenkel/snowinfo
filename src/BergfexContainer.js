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
            searchStrg: '',
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
            searchStrg: ' Fendels - Ried - Prutz',
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
            searchStrg: '',
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
        this.pushObject({
            city: 'Galtür',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Galtür', 'Paznaun-Ischgl'],
            searchStrg: 'Galtür / Paznaun-Ischgl',
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
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
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
        this.pushObject({
            city: 'Nassfeld',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Nassfeld'],
            searchStrg: 'Nassfeld',
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
        // Planai / Schladming - Ski amade
        this.pushObject({
            city: 'Schladming',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Planai', 'Schladming', 'Ski', 'amade'],
            searchStrg: 'Planai / Schladming - Ski amade',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Schmitten',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Zell', 'am', 'See', 'Schmitten'],
            searchStrg: 'Schmitten - Zell am See',
            speechstart: 'In'
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
        this.pushObject({
            city: 'Sölden',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Sölden'],
            searchStrg: 'Sölden',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Steinach',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Bergeralm', 'Steinach', 'Brenner'],
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Steinach am Brenner',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Bergeralm', 'Steinach', 'Brenner'],
            searchStrg: 'Bergeralm - Steinach am Brenner',
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
        this.pushObject({
            city: 'Vent',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Vent'],
            searchStrg: 'Vent',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Wagrain',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Snow', 'Space', 'Salzburg', 'Flachau', 'Wagrain', 'Alpendorf', 'Ski amade'],
            searchStrg: '',
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
        this.pushObject({
            city: 'Zams',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Landeck', 'Zams', 'Fliess', 'Venetregion'],
            searchStrg: 'Landeck - Zams - Fliess / Venetregion ',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Zell am See',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Zell', 'am', 'See', 'Schmitten'],
            searchStrg: 'Schmitten - Zell am See',
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