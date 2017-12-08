const WebDataContainer = require('./WebDataContainer');

class BergfexContainer extends WebDataContainer {

    getProtocol() {
        return 'https';
    }

    constructor() {

        super('bergfex');

        // Alta Badia
        this.pushObject({
            city: 'Alta Badia',
            host: 'www.bergfex.it', path: '/suedtirol/schneewerte/',
            searchStrg: 'Alta Badia',
            speechstart: 'In'
        });
        // Aletsch Arena / Riederalp - Bettmeralp - Fiesch-Eggishorn
        this.pushObject({
            city: 'Aletsch Arena',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Aletsch Arena / Riederalp - Bettmeralp - Fiesch-Eggishorn',
            speechstart: 'In der'
        });
        // Alpbach - Ski Juwel Alpbachtal Wildschönau
        this.pushObject({
            city: 'Alpbach',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Alpbach - Ski Juwel Alpbachtal Wildschönau',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Alpbachtal',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Alpbach - Ski Juwel Alpbachtal Wildschönau',
            speechstart: 'Im'
        });
        // Snow Space Salzburg - Flachau - Wagrain - Alpendorf - Ski amade
        this.pushObject({
            city: 'Alpendorf',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: '', // TODO
            speechstart: 'In'
        });
        // Mythenregion
        this.pushObject({
            city: 'Alpthal',
            host: 'www.bergfex.ch', path: '/luzern-vierwaldstaettersee/schneewerte/',
            searchStrg: 'Mythenregion',
            speechstart: 'In der',
            speechskiresort: 'Mythenregion'
        });
        // Loser - Altaussee - Schneebären
        this.pushObject({
            city: 'Altaussee',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Loser - Altaussee - Schneebären',
            speechstart: 'In'
        });
        // Radstadt - Altenmarkt - Ski amade
        this.pushObject({
            city: 'Altenmarkt',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Radstadt - Altenmarkt - Ski amade',
            speechstart: 'In'
        });
        // Crans Montana - Aminona
        this.pushObject({
            city: 'Aminona',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Crans Montana - Aminona',
            speechstart: 'In'
        });
        // Ankogel - Mallnitz
        this.pushObject({
            city: 'Ankogel',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            searchStrg: 'Ankogel - Mallnitz',
            speechstart: 'In'
        });
        // Arosa Lenzerheide
        this.pushObject({
            city: 'Arosa',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            searchStrg: 'Arosa Lenzerheide',
            speechstart: 'In'
        });
        // Axamer Lizum
        this.pushObject({
            city: 'Axamer Lizum',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Axamer Lizum'
        });
        // Bergeralm
        this.pushObject({
            city: 'Bergeralm',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'Auf der'
        });
        // Bad Hofgastein - Ski amade
        this.pushObject({
            city: 'Bad Hofgastein',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Bad Hofgastein - Ski amade',
            speechstart: 'In'
        });
        // Bad Gastein - Ski amade
        this.pushObject({
            city: 'Bad Gastein',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Bad Gastein - Ski amade',
            speechstart: 'In'
        });
        // Tauplitz / Bad Mitterndorf - Schneebären
        this.pushObject({
            city: 'Bad Mitterndorf',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Tauplitz / Bad Mitterndorf - Schneebären',
            speechstart: 'In'
        });
        // Beerfelden
        this.pushObject({
            city: 'Beerfelden',
            host: 'www.bergfex.de', path: '/hessen/schneewerte/',
            searchStrg: 'Beerfelden',
            speechstart: 'In'
        });
        // Belalp
        this.pushObject({
            city: 'Belalp',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Belalp',
            speechstart: 'In'
        });
        // Aletsch Arena / Riederalp - Bettmeralp - Fiesch-Eggishorn
        this.pushObject({
            city: 'Bettmeralp',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Aletsch Arena / Riederalp - Bettmeralp - Fiesch-Eggishorn',
            speechstart: 'Auf der'
        });
        // Brixen im Thale - SkiWelt
        this.pushObject({
            city: 'Brixen im Thale',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Brixen im Thale - SkiWelt',
            speechstart: 'In'
        });
        // Mythenregion
        this.pushObject({
            city: 'Brunni',
            host: 'www.bergfex.ch', path: '/luzern-vierwaldstaettersee/schneewerte/',
            searchStrg: 'Mythenregion',
            speechstart: 'In der',
            speechskiresort: 'Mythenregion'
        });
        // St. Moritz - Corviglia
        this.pushObject({
            city: 'Corviglia',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            searchStrg: 'St. Moritz - Corviglia',
            speechstart: 'In'
        });
        // Crans Montana - Aminona
        this.pushObject({
            city: 'Crans Montana',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Crans Montana - Aminona',
            speechstart: 'In'
        });
        // Christlum Achenkirch - Achensee
        this.pushObject({
            city: 'Christlum',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Christlum Achenkirch - Achensee',
            speechstart: 'In'
        });
        // Dachstein Gletscher
        this.pushObject({
            city: 'Dachstein Gletscher',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Dachstein Gletscher Schladming Ramsau - Ski amade',
            speechstart: 'Auf dem'
        });
        // Davos Klosters Parsenn
        this.pushObject({
            city: 'Davos',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            searchStrg: 'Davos Klosters Parsenn',
            speechstart: 'In'
        });
        // Hochkönig / Maria Alm - Dienten - Mühlbach - Ski amade
        this.pushObject({
            city: 'Dienten',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Hochkönig / Maria Alm - Dienten - Mühlbach - Ski amade',
            speechstart: 'In'
        });
        // Dorfgastein - Ski amade
        this.pushObject({
            city: 'Dorfgastein',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Dorfgastein - Ski amade',
            speechstart: 'In'
        });
        // Mythenregion
        this.pushObject({
            city: 'Einsiedeln',
            host: 'www.bergfex.ch', path: '/luzern-vierwaldstaettersee/schneewerte/',
            searchStrg: 'Mythenregion',
            speechstart: 'In der',
            speechskiresort: 'Mythenregion'
        });
        // Elferbahnen Neustift / Stubaital
        this.pushObject({
            city: 'Elferbahnen',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Elferbahnen Neustift / Stubaital',
            speechstart: 'Im Skigebiet'
        });
        // Ellmau - SkiWelt
        this.pushObject({
            city: 'Ellmau',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Ellmau - SkiWelt',
            speechstart: 'In'
        });
        // Engelberg Titlis
        this.pushObject({
            city: 'Engelberg',
            host: 'www.bergfex.ch', path: '/luzern-vierwaldstaettersee/schneewerte/',
            searchStrg: 'Engelberg Titlis',
            speechstart: 'In'
        });
        // Fageralm / Forstau - Ski amade
        this.pushObject({
            city: 'Fageralm',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Fageralm / Forstau - Ski amade',
            speechstart: 'Auf der'
        });
        // Flims Laax Falera
        this.pushObject({
            city: 'Falera',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            searchStrg: 'Flims Laax Falera',
            speechstart: 'In'
        });
        // Feldberg Liftverbund
        this.pushObject({
            city: 'Feldberg',
            host: 'www.bergfex.de', path: '/baden-wuerttemberg/schneewerte/',
            searchStrg: 'Feldberg Liftverbund',
            speechstart: 'Auf dem'
        });
        // Kleinwalsertal - Kanzelwand - Fellhorn
        this.pushObject({
            city: 'Fellhorn',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            speechstart: 'Im',
            speechskiresort: 'Fellhorn - Kanzelwand'
        });
        // Fendels
        this.pushObject({
            city: 'Fendels',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Fendels - Ried - Prutz',
            speechstart: 'In'
        });
        // Fieberbrunn
        this.pushObject({
            city: 'Fieberbrunn',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Fieberbrunn - Saalbach Hinterglemm Leogang',
            speechstart: 'In'
        });
        // Serfaus - Fiss - Ladis
        this.pushObject({
            city: 'Fiss',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Serfaus - Fiss - Ladis',
            speechstart: 'In'
        });
        // Flachau - Snow Space Salzburg - Ski amade
        this.pushObject({
            city: 'Flachau',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Flachau - Snow Space Salzburg - Ski amade',
            speechstart: 'In'
        });
        // Zauchensee - Flachauwinkl - Ski amade
        this.pushObject({
            city: 'Flachauwinkl',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Zauchensee - Flachauwinkl - Ski amade',
            speechstart: 'In'
        });
        // Aletsch Arena / Riederalp - Bettmeralp - Fiesch-Eggishorn
        this.pushObject({
            city: 'Fiesch',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Aletsch Arena / Riederalp - Bettmeralp - Fiesch-Eggishorn',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Fliess',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Landeck - Zams - Fliess / Venetregion',
            speechstart: 'In'
        });
        // Flims Laax Falera
        this.pushObject({
            city: 'Flims',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            searchStrg: 'Flims Laax Falera',
            speechstart: 'In'
        });
        // Fageralm / Forstau - Ski amade
        this.pushObject({
            city: 'Forstau',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Fageralm / Forstau - Ski amade',
            speechstart: 'In'
        });
        // Fügen - Spieljoch
        this.pushObject({
            city: 'Fügen',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Fügen - Spieljoch',
            speechstart: 'In'
        });
        // Gaberlu
        this.pushObject({
            city: 'Gaberl',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Gaberl',
            speechstart: 'In'
        });
        // Gaissau Hintersee
        this.pushObject({
            city: 'Gaissau',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Gaissau Hintersee',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Galtür',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Galtür / Paznaun-Ischgl',
            speechstart: 'In'
        });
        //  Going - SkiWelt
        this.pushObject({
            city: 'Going',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Going - SkiWelt',
            speechstart: 'In'
        });
        //  Golm im Montafon
        this.pushObject({
            city: 'Golm',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Golm im Montafon',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Golm im Montafon',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Golm im Montafon',
            speechstart: 'In'
        });
        // Grebenzen - St.Lambrecht
        this.pushObject({
            city: 'Grebenzen',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Grebenzen - St.Lambrecht',
            speechstart: 'In'
        });
        // Grimentz - Zinal
        this.pushObject({
            city: 'Grimentz',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Zinal',
            speechstart: 'In'
        });
        // Jungfrau Ski Region Grindelwald - Wengen
        this.pushObject({
            city: 'Grindelwald',
            host: 'www.bergfex.ch', path: '/berneroberland/schneewerte/',
            searchStrg: 'Jungfrau Ski Region Grindelwald - Wengen',
            speechstart: 'In'
        });
        // Großarl Tal - Ski amade
        this.pushObject({
            city: 'Großarl',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Großarl Tal - Ski amade',
            speechstart: 'In'
        });
        // Großarl Tal - Ski amade
        this.pushObject({
            city: 'Großarl Tal',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Großarl Tal - Ski amade',
            speechstart: 'In'
        });
        // Großeck - Speiereck - Mauterndorf
        this.pushObject({
            city: 'Großeck',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Großeck - Speiereck - Mauterndorf',
            speechstart: 'In'
        });
        // Gröden - Wolkenstein
        this.pushObject({
            city: 'Gröden',
            host: 'www.bergfex.it', path: '/suedtirol/schneewerte/',
            searchStrg: 'Gröden - Wolkenstein',
            speechstart: 'In'
        });
        // Kasberg - Grünau im Almtal
        this.pushObject({
            city: 'Grünau',
            host: 'www.bergfex.at', path: '/oberoesterreich/schneewerte/',
            searchStrg: 'Kasberg - Grünau im Almtal',
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Grünau im Almtal',
            host: 'www.bergfex.at', path: '/oberoesterreich/schneewerte/',
            searchStrg: 'Kasberg - Grünau im Almtal',
            speechstart: 'Im'
        });
        // Seefeld / Gschwandtkopf
        this.pushObject({
            city: 'Gschwandtkopf',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Seefeld / Gschwandtkopf',
            speechstart: 'In'
        });
        // Hauser Kaibling / Schladming - Ski amade
        this.pushObject({
            city: 'Hauser Kaibling',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Hauser Kaibling / Schladming - Ski amade',
            speechstart: 'In'
        });
        // Heiligenblut - Grossglockner
        this.pushObject({
            city: 'Heiligenblut',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            searchStrg: 'Heiligenblut - Grossglockner',
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Heuberg',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'In'
        });
        // Skilifte Unken / Heutal
        this.pushObject({
            city: 'Heutal',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Skilifte Unken / Heutal',
            speechstart: 'In'
        });
        // Gaissau Hintersee
        this.pushObject({
            city: 'Hintersee',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Gaissau Hintersee',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Hintertux',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Hintertuxer Gletscher / Hintertux',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Hintertuxer Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Hintertuxer Gletscher / Hintertux',
            speechstart: 'Auf dem'
        });
        // Hoch-Ybrig
        this.pushObject({
            city: 'Hoch-Ybrig',
            host: 'www.bergfex.ch', path: '/luzern-vierwaldstaettersee/schneewerte/',
            searchStrg: 'Hoch-Ybrig',
            speechstart: 'In'
        });
        // Hochficht - Böhmerwald
        this.pushObject({
            city: 'Hochficht',
            host: 'www.bergfex.at', path: '/oberoesterreich/schneewerte/',
            searchStrg: 'Hochficht - Böhmerwald',
            speechstart: 'In'
        });
        // Hochfügen Zillertal
        this.pushObject({
            city: 'Hochfügen',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Hochfügen Zillertal',
            speechstart: 'In'
        });
        // Hochkönig / Maria Alm - Dienten - Mühlbach - Ski amade
        this.pushObject({
            city: 'Hochkönig',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Hochkönig / Maria Alm - Dienten - Mühlbach - Ski amade',
            speechstart: 'In'
        });
        // Hochkössen - Unterberg
        this.pushObject({
            city: 'Hochkössen',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Hochkössen - Unterberg',
            speechstart: 'In'
        });
        // Hochkrimml
        this.pushObject({
            city: 'Hochkrimml',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Krimml / Hochkrimml – Zillertal Arena',
            speechstart: 'In'
        });
        // Hochwurzen / Schladming - Ski amade
        this.pushObject({
            city: 'Hochwurzen',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Hochwurzen / Schladming - Ski amade',
            speechstart: 'In'
        });
        // Hochzeiger - Jerzens im Pitztal
        this.pushObject({
            city: 'Hochzeiger',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Hochzeiger - Jerzens im Pitztal',
            speechstart: 'Im Skigebiet'
        });
        // Hochzillertal
        this.pushObject({
            city: 'Hochzillertal',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Hochzillertal'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Ifen',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'In'
        });
        // Innsbruck Igls - Patscherkofel
        this.pushObject({
            city: 'Igls',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Innsbruck Igls - Patscherkofel',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Ischgl',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Ischgl',
            speechstart: 'In'
        });
        // Hochzeiger - Jerzens im Pitztal
        this.pushObject({
            city: 'Jerzens',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Hochzeiger - Jerzens im Pitztal',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Jungholz',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Jungholz',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Kals',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Kals - GG Resorts Kals-Matrei',
            speechstart: 'In'
        });
        // Kleinwalsertal - Kanzelwand - Fellhorn
        this.pushObject({
            city: 'Kanzelwand',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Kleinwalsertal - Kanzelwand - Fellhorn',
            speechstart: 'Im',
            speechskiresort: 'Fellhorn - Kanzelwand'
        });
        this.pushObject({
            city: 'Kappl',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Kappl / Paznaun-Ischgl',
            speechstart: 'In'
        });
        // Kitzsteinhorn - Kaprun
        this.pushObject({
            city: 'Kaprun',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Auf dem',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        this.pushObject({
            city: 'Kaprun Kitzsteinhorn',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'In'
        });
        // Kasberg - Grünau im Almtal
        this.pushObject({
            city: 'Kasberg',
            host: 'www.bergfex.at', path: '/oberoesterreich/schneewerte/',
            searchStrg: 'Kasberg - Grünau im Almtal',
            speechstart: 'Im'
        });
        // Katschberg
        this.pushObject({
            city: 'Katschberg',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Katschberg',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Kaunertal',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Kaunertaler Gletscher / Kaunertal',
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Kaunertaler Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Kaunertaler Gletscher / Kaunertal',
            speechstart: 'Auf dem'
        });
        // Shuttleberg Flachauwinkl-Kleinarl - Ski amade
        this.pushObject({
            city: 'Kleinarl',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Shuttleberg Flachauwinkl-Kleinarl - Ski amade',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Kirchberg',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Kitzbühel - Kirchberg',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Kitzbühel',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Kitzbühel - Kirchberg',
            speechstart: 'In'
        });
        // Kitzsteinhorn - Kaprun
        this.pushObject({
            city: 'Kitzsteinhorn',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Auf dem'
        });
        this.pushObject({
            city: 'Kitzsteinhorn Kaprun',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Auf dem'
        });
        // Klausberg - Ahrntal
        this.pushObject({
            city: 'Klausberg',
            host: 'www.bergfex.it', path: '/suedtirol/schneewerte/',
            searchStrg: 'Klausberg - Ahrntal',
            speechstart: 'In'
        });
        // Kleinwalsertal - Kanzelwand - Fellhorn
        this.pushObject({
            city: 'Kleinwalsertal',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Kleinwalsertal - Kanzelwand - Fellhorn',
            speechstart: 'Im'
        });
        // Davos Klosters Parsenn
        this.pushObject({
            city: 'Klosters',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            searchStrg: 'Davos Klosters Parsenn',
            speechstart: 'In'
        });
        // Koralpe
        this.pushObject({
            city: 'Koralpe',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            searchStrg: 'Koralpe',
            speechstart: 'In'
        });
        // Kreischberg / Murau
        this.pushObject({
            city: 'Kreischberg',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Kreischberg / Murau',
            speechstart: 'Auf dem'
        });
        // Krimml
        this.pushObject({
            city: 'Krimml',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Krimml / Hochkrimml – Zillertal Arena',
            speechstart: 'In'
        });
        // Kronplatz - Dolomiten
        this.pushObject({
            city: 'Kronplatz',
            host: 'www.bergfex.it', path: '/suedtirol/schneewerte/',
            searchStrg: 'Kronplatz - Dolomiten',
            speechstart: 'Auf dem'
        });
        // Kühtai
        this.pushObject({
            city: 'Kühtai',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Kühtai',
            speechstart: 'Kühtai'
        });
        // La Tzoumaz - Mayens de Riddes
        this.pushObject({
            city: 'La Tzoumaz',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'La Tzoumaz - Mayens de Riddes',
            speechstart: 'In'
        });
        // Flims Laax Falera
        this.pushObject({
            city: 'Laax',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            searchStrg: 'Flims Laax Falera',
            speechstart: 'In'
        });
        // Lachtal
        this.pushObject({
            city: 'Lachtal',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Lachtal',
            speechstart: 'Im'
        });
        // Serfaus - Fiss - Ladis
        this.pushObject({
            city: 'Ladis',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Serfaus - Fiss - Ladis',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Landeck',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Landeck - Zams - Fliess / Venetregion',
            speechstart: 'Auf dem'
        });
        // Lauchernalp - Lötschental
        this.pushObject({
            city: 'Lauchernalp',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Lauchernalp - Lötschental',
            speechstart: 'In'
        });
        // Arosa Lenzerheide
        this.pushObject({
            city: 'Lenzerheide',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            searchStrg: 'Arosa Lenzerheide',
            speechstart: 'In'
        });
        // Leogang
        this.pushObject({
            city: 'Leogang',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Leogang - Saalbach Hinterglemm Fieberbrunn',
            speechstart: 'In'
        });
        // Lofer - Almenwelt Lofer
        this.pushObject({
            city: 'Lofer',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Lofer - Almenwelt Lofer',
            speechstart: 'In'
        });
        // Lauchernalp - Lötschental
        this.pushObject({
            city: 'Lötschental',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Lauchernalp - Lötschental',
            speechstart: 'In'
        });
        // Malbun !!! NUR BERGFEX
        this.pushObject({
            city: 'Malbun',
            host: 'www.bergfex.ch', path: '/liechtenstein/schneewerte/',
            searchStrg: 'Malbun',
            speechstart: 'In'
        });
        // Ankogel - Mallnitz
        this.pushObject({
            city: 'Mallnitz',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            searchStrg: 'Ankogel - Mallnitz',
            speechstart: 'In'
        });
        // Hochkönig / Maria Alm - Dienten - Mühlbach - Ski amade
        this.pushObject({
            city: 'Maria Alm',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Hochkönig / Maria Alm - Dienten - Mühlbach - Ski amade',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Matrei ',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Matrei  - GG Resorts Kals-Matrei',
            speechstart: 'In'
        });
        // Großeck - Speiereck - Mauterndorf
        this.pushObject({
            city: 'Mauterndorf',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Großeck - Speiereck - Mauterndorf',
            speechstart: 'In'
        });
        // La Tzoumaz - Mayens de Riddes
        this.pushObject({
            city: 'Mayens de Riddes',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'La Tzoumaz - Mayens de Riddes',
            speechstart: 'In'
        });
        // St. Blasien - Menzenschwand
        this.pushObject({
            city: 'Menzenschwand',
            host: 'www.bergfex.de', path: '/baden-wuerttemberg/schneewerte/',
            searchStrg: 'St. Blasien - Menzenschwand',
            speechstart: 'In'
        });
        // Meran 2000
        this.pushObject({
            city: 'Meran',
            host: 'www.bergfex.it', path: '/suedtirol/schneewerte/',
            searchStrg: 'Meran 2000',
            speechstart: 'In'
        });
        // Mayrhofen - Zillertal
        this.pushObject({
            city: 'Mayrhofen ',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Mayrhofen - Zillertal',
            speechstart: 'In'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Montafon',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Silvretta Montafon',
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Silvretta Montafon'
        });
        this.pushObject({
            city: 'Mölltaler Gletscher',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            searchStrg: 'Mölltaler Gletscher',
            speechstart: 'Auf dem'
        });
        // Mörlialp
        this.pushObject({
            city: 'Mörlialp',
            host: 'www.bergfex.ch', path: '/luzern-vierwaldstaettersee/schneewerte/',
            searchStrg: 'Mörlialp',
            speechstart: 'In'
        });
        // Muggenbrunn
        this.pushObject({
            city: 'Muggenbrunn',
            host: 'www.bergfex.de', path: '/baden-wuerttemberg/schneewerte/',
            searchStrg: 'Muggenbrunn',
            speechstart: 'In'
        });
        // Kreischberg / Murau
        this.pushObject({
            city: 'Murau',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Kreischberg / Murau',
            speechstart: 'In'
        });
        // Hochkönig / Maria Alm - Dienten - Mühlbach - Ski amade
        this.pushObject({
            city: 'Mühlbach',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Hochkönig / Maria Alm - Dienten - Mühlbach - Ski amade',
            speechstart: 'In'
        });
        // Mythenregion
        this.pushObject({
            city: 'Mythen',
            host: 'www.bergfex.ch', path: '/luzern-vierwaldstaettersee/schneewerte/',
            searchStrg: 'Mythenregion',
            speechstart: 'In der',
            speechskiresort: 'Mythenregion'
        });
        // Mythenregion
        this.pushObject({
            city: 'Mythenregion',
            host: 'www.bergfex.ch', path: '/luzern-vierwaldstaettersee/schneewerte/',
            searchStrg: 'Mythenregion',
            speechstart: 'In der'
        });
        this.pushObject({
            city: 'Nassfeld',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            searchStrg: 'Nassfeld',
            speechstart: 'In'
        });
        // Nendaz / 4 Vallées
        this.pushObject({
            city: 'Nendaz',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Nendaz / 4 Vallées',
            speechstart: 'In'
        });
        // Elferbahnen Neustift / Stubaital
        this.pushObject({
            city: 'Neustift',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Elferbahnen Neustift / Stubaital',
            speechstart: 'In'
        });
        // Niederalpl
        this.pushObject({
            city: 'Niederalpl',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Niederalpl',
            speechstart: 'Auf der'
        });
        // Umhausen - Niederthai
        this.pushObject({
            city: 'Niederthai',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Umhausen - Niederthai',
            speechstart: 'In'
        });
        // Obertauern
        this.pushObject({
            city: 'Obertauern',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Obertauern',
            speechstart: 'In'
        });
        // Petzen - Feistritz ob Bleiburg
        this.pushObject({
            city: 'Petzen',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            searchStrg: 'Petzen - Feistritz ob Bleiburg',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Pitztal',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Pitztaler Gletscher - Rifflsee / Pitztal',
            speechstart: 'Auf dem',
            speechskiresort: 'Pitztaler Gletscher'
        });
        this.pushObject({
            city: 'Pitztaler Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Pitztaler Gletscher - Rifflsee / Pitztal',
            speechstart: 'Auf dem'
        });
        // Planai / Schladming - Ski amade
        this.pushObject({
            city: 'Planai',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Planai / Schladming - Ski amade',
            speechstart: 'Auf der'
        });
        // Planneralm - Schneebären
        this.pushObject({
            city: 'Planneralm',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Planneralm - Schneebären',
            speechstart: 'Auf der'
        });
        // Postalm Arena am Wolfgangsee
        this.pushObject({
            city: 'Postalm',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Postalm Arena am Wolfgangsee',
            speechstart: 'Auf der'
        });
        // Postalm Arena am Wolfgangsee
        this.pushObject({
            city: 'Postalm Arena',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Postalm Arena am Wolfgangsee',
            speechstart: 'In der'
        });
        // Radstadt - Altenmarkt - Ski amade
        this.pushObject({
            city: 'Radstadt',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Radstadt - Altenmarkt - Ski amade',
            speechstart: 'In'
        });
        // Raurisertal - Hochalmbahnen
        this.pushObject({
            city: 'Rauris',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Raurisertal - Hochalmbahnen',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Raurisertal',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Raurisertal - Hochalmbahnen',
            speechstart: 'Im'
        });
        // Zugspitze
        this.pushObject({
            city: 'Reit im Winkl',
            host: 'www.bergfex.de', path: '/bayern/schneewerte/',
            searchStrg: 'Reit im Winkl',
            speechstart: 'In'
        });
        // Reiteralm / Schladming - Ski amade
        this.pushObject({
            city: 'Reiteralm',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Reiteralm / Schladming - Ski amade',
            speechstart: 'Auf der'
        });
        // Aletsch Arena / Riederalp - Bettmeralp - Fiesch-Eggishorn
        this.pushObject({
            city: 'Riederalp',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Aletsch Arena / Riederalp - Bettmeralp - Fiesch-Eggishorn',
            speechstart: 'Auf der'
        });
        // Riesneralm - Schneebären
        this.pushObject({
            city: 'Riesneralm',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Riesneralm - Schneebären',
            speechstart: 'Auf der'
        });
        // Rigi
        this.pushObject({
            city: 'Rigi',
            host: 'www.bergfex.ch', path: '/luzern-vierwaldstaettersee/schneewerte/',
            searchStrg: 'Rigi',
            speechstart: 'In'
        });
        // Seefeld / Rosshütte
        this.pushObject({
            city: 'Rosshütte',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Seefeld / Rosshütte',
            speechstart: 'In'
        });
        // Saas-Fee
        this.pushObject({
            city: 'Saas-Fee',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Saas-Fee',
            speechstart: 'In'
        });
        // Samnaun
        this.pushObject({
            city: 'Samnaun',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            searchStrg: 'Samnaun',
            speechstart: 'In'
        });
        // St. Anton am Arlberg
        this.pushObject({
            city: 'Sankt Anton',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'St. Anton am Arlberg',
            speechstart: 'In'
        });
        // St. Anton am Arlberg
        this.pushObject({
            city: 'Sankt Anton am Arlberg',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'St. Anton am Arlberg',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Sankt Johann',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'St. Johann in Tirol',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Sankt Johann in Tirol',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'St. Johann in Tirol',
            speechstart: 'In'
        });
        // Grebenzen - St.Lambrecht
        this.pushObject({
            city: 'Sankt Lambrecht',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Grebenzen - St.Lambrecht',
            speechstart: 'In'
        });
        // Großeck - Speiereck - Mauterndorf
        this.pushObject({
            city: 'Sankt Michael',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Großeck - Speiereck - Mauterndorf',
            speechstart: 'In'
        });
        // St. Moritz - Corviglia
        this.pushObject({
            city: 'Sankt Moritz',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            searchStrg: 'St. Moritz - Corviglia',
            speechstart: 'In'
        });
        // Simonhöhe - Sankt Urban
        this.pushObject({
            city: 'Sankt Urban',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            searchStrg: 'Simonhöhe - Sankt Urban',
            speechstart: 'In',
        });
        // Scheffau - SkiWelt
        this.pushObject({
            city: 'Scheffau',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Scheffau - SkiWelt',
            speechstart: 'In'
        });
        // Schetteregg
        this.pushObject({
            city: 'Schetteregg',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Schetteregg',
            speechstart: 'In'
        });
        // Planai / Schladming - Ski amade
        this.pushObject({
            city: 'Schladming',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Planai / Schladming - Ski amade',
            speechstart: 'In'
        });
        // Schlick 2000
        this.pushObject({
            city: 'Schlick',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Schlick 2000',
            speechstart: 'In'
        });
        // Schlick 2000
        this.pushObject({
            city: 'Schlick 2000',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Schlick 2000',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Schmitten',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Schmitten - Zell am See',
            speechstart: 'In'
        });
        // Sedrun Oberalp
        this.pushObject({
            city: 'Sedrun',
            host: 'www.bergfex.ch', path: '/graubuenden/schneewerte/',
            searchStrg: 'Sedrun Oberalp',
            speechstart: 'In'
        });
        // See / Paznaun-Ischgl
        this.pushObject({
            city: 'See',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'See / Paznaun-Ischgl',
            speechstart: 'In'
        });
        // Seiser Alm
        this.pushObject({
            city: 'Seiser Alm',
            host: 'www.bergfex.it', path: '/suedtirol/schneewerte/',
            searchStrg: 'Seiser Alm',
            speechstart: 'In'
        });
        // Stuhleck - Semmering
        this.pushObject({
            city: 'Semmering',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Stuhleck - Semmering',
            speechstart: 'In'
        });
        // Serfaus - Fiss - Ladis
        this.pushObject({
            city: 'Serfaus',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Serfaus - Fiss - Ladis',
            speechstart: 'In'
        });
        // Sillian
        this.pushObject({
            city: 'Sillian',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Sillian - Hochpustertal'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Silvretta Montafon',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Silvretta Montafon',
            speechstart: 'Im Skigebiet'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Silvretta',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            speechstart: 'Im Skigebiet',
            searchStrg: 'Silvretta Montafon',
            speechskiresort: 'Silvretta Montafon'
        });
        // Simonhöhe - Sankt Urban
        this.pushObject({
            city: 'Simonhöhe',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            searchStrg: 'Simonhöhe - Sankt Urban',
            speechstart: 'Auf der',
        });
        this.pushObject({
            city: 'Sölden',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Sölden',
            speechstart: 'In'
        });
        // Großeck - Speiereck - Mauterndorf
        this.pushObject({
            city: 'Speiereck',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Großeck - Speiereck - Mauterndorf',
            speechstart: 'In'
        });
        // Fügen - Spieljoch
        this.pushObject({
            city: 'Spieljoch',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Fügen - Spieljoch',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Steinach',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        // Waidring - Steinplatte
        this.pushObject({
            city: 'Steinplatte',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Waidring - Steinplatte',
            speechstart: 'Auf der'
        });
        this.pushObject({
            city: 'Steinach am Brenner',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        // Stoderzinken - Ski amade
        this.pushObject({
            city: 'Stoderzinken',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Stoderzinken - Ski amade',
            speechstart: 'In'
        });
        // Stoos
        this.pushObject({
            city: 'Stoos',
            host: 'www.bergfex.ch', path: '/luzern-vierwaldstaettersee/schneewerte/',
            searchStrg: 'Stoos',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Stubaital',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Stubaier Gletscher / Stubaital',
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Stubaier Gletscher',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Stubaier Gletscher / Stubaital',
            speechstart: 'Auf dem'
        });
        // Stuhleck - Semmering
        this.pushObject({
            city: 'Stuhleck',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Stuhleck - Semmering',
            speechstart: 'In'
        });
        // Tauplitz / Bad Mitterndorf - Schneebären
        this.pushObject({
            city: 'Tauplitz',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Tauplitz / Bad Mitterndorf - Schneebären',
            speechstart: 'In'
        });
        // Todtnauberg
        this.pushObject({
            city: 'Todtnauberg',
            host: 'www.bergfex.de', path: '/baden-wuerttemberg/schneewerte/',
            searchStrg: 'Todtnauberg',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Turracher Höhe',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            searchStrg: 'Turracher Höhe',
            speechstart: 'Auf der'
        });
        // Umhausen - Niederthai
        this.pushObject({
            city: 'Umhausen',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Umhausen - Niederthai',
            speechstart: 'In'
        });
        // Usseln
        this.pushObject({
            city: 'Usseln',
            host: 'www.bergfex.de', path: '/hessen/schneewerte/',
            searchStrg: 'Usseln',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Vent',
            host: 'www.bergfex.at', path: '/kaernten/schneewerte/',
            searchStrg: 'Vent',
            speechstart: 'In'
        });
        // Verbier / 4 Vallées
        this.pushObject({
            city: 'Verbier',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Verbier / 4 Vallées',
            speechstart: 'In'
        });
        // Veysonnaz / 4 Vallées
        this.pushObject({
            city: 'Veysonnaz',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Veysonnaz / 4 Vallées',
            speechstart: 'In'
        });
        // Vogelsberg
        this.pushObject({
            city: 'Vogelsberg',
            host: 'www.bergfex.de', path: '/hessen/schneewerte/',
            searchStrg: 'Vogelsberg',
            speechstart: 'In'
        });
        // Waidring - Steinplatte
        this.pushObject({
            city: 'Waidring',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Waidring - Steinplatte',
            speechstart: 'In'
        });
        // Wagrain - Snow Space Salzburg - Ski amade
        this.pushObject({
            city: 'Wagrain',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Wagrain - Snow Space Salzburg - Ski amade',
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Walmendingerhorn',
            host: 'www.bergfex.at', path: '/vorarlberg/schneewerte/',
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'Im'
        });
        // Weinebene
        this.pushObject({
            city: 'Weinebene',
            host: 'www.bergfex.at', path: '/steiermark/schneewerte/',
            searchStrg: 'Weinebene',
            speechstart: 'In'
        });
        // Jungfrau Ski Region Grindelwald - Wengen
        this.pushObject({
            city: 'Wengen',
            host: 'www.bergfex.ch', path: '/berneroberland/schneewerte/',
            searchStrg: 'Jungfrau Ski Region Grindelwald - Wengen',
            speechstart: 'In'
        });
        // Werfenweng
        this.pushObject({
            city: 'Werfenweng',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Werfenweng',
            speechstart: 'In'
        });
        // Westendorf - SkiWelt
        this.pushObject({
            city: 'Westendorf',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Westendorf - SkiWelt',
            speechstart: 'In'
        });
        // Willingen
        this.pushObject({
            city: 'Willingen',
            host: 'www.bergfex.de', path: '/hessen/schneewerte/',
            searchStrg: 'Willingen',
            speechstart: 'In'
        });
        // Winklmoos Steinplatte / Reit im Winkl
        this.pushObject({
            city: 'Winklmoos',
            host: 'www.bergfex.de', path: '/bayern/schneewerte/',
            searchStrg: 'Winklmoos Steinplatte / Reit im Winkl',
            speechstart: 'In'
        });
        // Waidring - Steinplatte
        this.pushObject({
            city: 'Winklmoosalm',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Waidring - Steinplatte',
            speechstart: 'Auf der'
        });
        // Gröden - Wolkenstein
        this.pushObject({
            city: 'Wolkenstein',
            host: 'www.bergfex.it', path: '/suedtirol/schneewerte/',
            searchStrg: 'Gröden - Wolkenstein',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Zams',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Landeck - Zams - Fliess / Venetregion',
            speechstart: 'In'
        });
        // Zauchensee - Flachauwinkl - Ski amade
        this.pushObject({
            city: 'Zauchensee',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Zauchensee - Flachauwinkl - Ski amade',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Zell am See',
            host: 'www.bergfex.at', path: '/salzburg/schneewerte/',
            searchStrg: 'Schmitten - Zell am See',
            speechstart: 'In'
        });
        // Zell am Ziller - Zillertal Arena
        this.pushObject({
            city: 'Zell am Ziller',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Zell am Ziller - Zillertal Arena',
            speechstart: 'In'
        });
        // Zermatt
        this.pushObject({
            city: 'Zermatt',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Zermatt',
            speechstart: 'In'
        });
        // Zell am Ziller - Zillertal Arena
        this.pushObject({
            city: 'Zillertal Arena',
            host: 'www.bergfex.at', path: '/tirol/schneewerte/',
            searchStrg: 'Zell am Ziller - Zillertal Arena',
            speechstart: 'In der'
        });
        // Grimentz - Zinal
        this.pushObject({
            city: 'Zinal',
            host: 'www.bergfex.ch', path: '/wallis/schneewerte/',
            searchStrg: 'Zinal',
            speechstart: 'In'
        });
        // Zugspitze
        this.pushObject({
            city: 'Zugspitze',
            host: 'www.bergfex.de', path: '/bayern/schneewerte/',
            searchStrg: 'Zugspitze',
            speechstart: 'Auf der'
        });
    }

}

module.exports = BergfexContainer;