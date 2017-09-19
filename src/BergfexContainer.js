const WebDataContainer = require('./WebDataContainer');

class BergfexContainer extends WebDataContainer {

    constructor() {

        super('bergfex');


        // Alpbach - Ski Juwel Alpbachtal Wildschönau
        this.pushObject({
            city: 'Alpbach',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Alpbach', 'Ski', 'Juwel', 'Alpbachtal', 'Wildschönau'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Alpbachtal',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Alpbach', 'Ski', 'Juwel', 'Alpbachtal', 'Wildschönau'],
            speechstart: 'Im'
        });
        // Snow Space Salzburg - Flachau - Wagrain - Alpendorf - Ski amade
        this.pushObject({
            city: 'Alpendorf',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Snow','Space','Salzburg','Flachau','Wagrain','Alpendorf','Ski amade'],
            speechstart: 'In'
        });
        // Bergeralm
        this.pushObject({
            city: 'Bergeralm',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Bergeralm', 'Steinach', 'Brenner'],
            speechstart: 'Auf der'
        });
        // Dachstein Gletscher
        this.pushObject({
            city: 'Dachstein Gletscher',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Dachstein', 'Gletscher'],
            speechstart: 'Auf dem'
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
            speechstart: 'In'
        });
        // Fieberbrunn
        this.pushObject({
            city: 'Fieberbrunn',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Fieberbrunn', 'Saalbach', 'Hinterglemm', 'Leogang'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Flachau',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Snow','Space','Salzburg','Flachau','Wagrain','Alpendorf','Ski amade'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Fliess',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Landeck', 'Zams', 'Fliess', 'Venetregion'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Galtür',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Galtür', 'Paznaun-Ischgl'],
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Heuberg',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Walmendingerhorn','Ifen','Heuberg'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Hintertux',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Hintertuxer', 'Gletscher', 'Hintertux'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Hintertuxer Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Hintertuxer', 'Gletscher', 'Hintertux'],
            speechstart: 'Auf dem'
        });
        // Hochficht - Böhmerwald
        this.pushObject({
            city: 'Hochficht',
            host: 'www.bergfex.at', path: '/oberoesterreich/schneewerte/',
            search: ['Hochficht', 'Böhmerwald'],
            speechstart: 'In'
        });
        // Hochkrimml
        this.pushObject({
            city: 'Hochkrimml',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Krimml', 'Hochkrimml', 'Zillertal', 'Arena'],
            speechstart: 'In'
        });
        // Hochwurzen / Schladming - Ski amade
        this.pushObject({
            city: 'Hochwurzen',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Hochwurzen', 'Schladming', 'Ski', 'amade'],
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Ifen',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Walmendingerhorn','Ifen','Heuberg'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Ischgl',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Ischgl'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Jungholz',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Jungholz'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Kals - GG Resorts Kals-Matrei',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Kals', 'Resorts', 'Kals-Matrei'],
            speechstart: 'In'
        });
        // Kleinwalsertal - Kanzelwand - Fellhorn
        this.pushObject({
            city: 'Kanzelwand',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Kleinwalsertal', 'Kanzelwand', 'Fellhorn'],
            speechstart: 'Im',
            speechskiresort: 'Fellhorn - Kanzelwand'            
        });
        this.pushObject({
            city: 'Kappl',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Kappl', 'Paznaun-Ischgl'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Kaunertal',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Kaunertaler', 'Gletscher', 'Kaunertal'],
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Kaunertaler Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Kaunertaler', 'Gletscher', 'Kaunertal'],
            speechstart: 'Auf dem'
        });
        this.pushObject({
            city: 'Kitzbühel',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Kitzbühel', 'Kirchberg'],
            speechstart: 'In'
        });
        // Kleinwalsertal - Kanzelwand - Fellhorn
        this.pushObject({
            city: 'Kleinwalsertal',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Kleinwalsertal', 'Kanzelwand', 'Fellhorn'],
            speechstart: 'Im'
        });
        // Koralpe
        this.pushObject({
            city: 'Koralpe',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Koralpe'],
            speechstart: 'In'
        });
        // Krimml
        this.pushObject({
            city: 'Krimml',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Krimml', 'Hochkrimml', 'Zillertal', 'Arena'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Landeck',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Landeck', 'Zams', 'Fliess', 'Venetregion'],
            speechstart: 'Auf dem'
        });
        // Leogang
        this.pushObject({
            city: 'Leogang',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Fieberbrunn', 'Saalbach', 'Hinterglemm', 'Leogang'],
            speechstart: 'In'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Montafon',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Silvretta', 'Montafon'],
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Silvretta Montafon'
        });
        this.pushObject({
            city: 'Mölltaler Gletscher',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Mölltaler', 'Gletscher'],
            speechstart: 'Auf dem'
        });
        this.pushObject({
            city: 'Nassfeld',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Nassfeld'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Pitztal',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Pitztaler', 'Gletscher', 'Rifflsee', 'Pitztal'],
            speechstart: 'Auf dem',
            speechskiresort: 'Pitztaler Gletscher'
        });
        this.pushObject({
            city: 'Pitztaler Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Pitztaler', 'Gletscher', 'Rifflsee', 'Pitztal'],
            speechstart: 'Auf dem'
        });
        // Planai / Schladming - Ski amade
        this.pushObject({
            city: 'Planai',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Planai', 'Schladming', 'Ski', 'amade'],
            speechstart: 'Auf der'
        });
        this.pushObject({
            city: 'Sankt Johann',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Sankt', 'Johann', 'Tirol'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Sankt Johann in Tirol',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Sankt', 'Johann', 'Tirol'],
            speechstart: 'In'
        });
        // Planai / Schladming - Ski amade
        this.pushObject({
            city: 'Schladming',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            search: ['Planai', 'Schladming', 'Ski', 'amade'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Schmitten',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Zell', 'am', 'See', 'Schmitten'],
            speechstart: 'In'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Silvretta Montafon',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Silvretta', 'Montafon'],
            speechstart: 'Im Skigebiet'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Silvretta',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Silvretta', 'Montafon'],
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Silvretta Montafon'            
        });
        this.pushObject({
            city: 'Sölden',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Sölden'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Steinach',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Bergeralm', 'Steinach', 'Brenner'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Steinach am Brenner',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Bergeralm', 'Steinach', 'Brenner'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Stubaital',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Stubaier', 'Gletscher', 'Stubaital'],
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Stubaier Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Stubaier', 'Gletscher', 'Stubaital'],
            speechstart: 'Auf dem'
        });
        this.pushObject({
            city: 'Turracher Höhe',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Turracher', 'Höhe'],
            speechstart: 'Auf der'
        });
        this.pushObject({
            city: 'Vent',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            search: ['Vent'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Wagrain',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Snow','Space','Salzburg','Flachau','Wagrain','Alpendorf','Ski amade'],
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Walmendingerhorn',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            search: ['Walmendingerhorn','Ifen','Heuberg'],
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Zams',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            search: ['Landeck', 'Zams', 'Fliess', 'Venetregion'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Zell am See',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            search: ['Zell', 'am', 'See', 'Schmitten'],
            speechstart: 'In'
        });

    }

}

module.exports = BergfexContainer;