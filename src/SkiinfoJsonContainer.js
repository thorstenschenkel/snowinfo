const WebDataContainer = require('./WebDataContainer');

const AT_PATH = 'https://skiapp.onthesnow.com/app/widgets/resortlist?region=de&regionids=242&language=de&pagetype=skireport';

class SkiinfoJsonContainer extends WebDataContainer {

    getProtocol() {
        return 'https';
    }

    constructor() {

        super('skiinfo');

        // Sirnitz Albeck Hochrindl
        this.pushObject({
            city: 'Albeck',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Hochrindl Sirnitz Albeck',
            speechstart: 'In'
        });
        // Alberschwende
        this.pushObject({
            city: 'Alberschwende',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Alberschwende',
            speechstart: 'In'
        });

        // Ski Juwel Alpbach Wildschönau
        this.pushObject({
            city: 'Alpbach',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Ski Juwel Alpbachtal Wildschönau',
            speechstart: 'In'
        });
        // Ski Juwel Alpbachtal Wildschönau
        this.pushObject({
            city: 'Alpbachtal',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Ski Juwel Alpbachtal Wildschönau',
            speechstart: 'In'
        });
        // St. Johann im Pongau - Alpendorf
        this.pushObject({
            city: 'Alpendorf',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Snow Space Salzburg -  Alpendorf in St. Johann im Pongau',
            speechstart: 'In'
        });
        // Loser Bergbahnen Altaussee
        this.pushObject({
            city: 'Altaussee',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Loser Bergbahnen Altaussee',
            speechstart: 'In'
        });
        // Radstadt - Altenmarkt
        this.pushObject({
            city: 'Altenmarkt',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Radstadt - Altenmarkt',
            speechstart: 'In'
        });
        // Andelsbuch Niedere
        this.pushObject({
            city: 'Andelsbuch',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Andelsbuch Niedere',
            speechstart: 'In'
        });
        // Ankogel
        this.pushObject({
            city: 'Ankogel',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Ankogel',
            speechstart: 'In'
        });
        // Annaberg
        this.pushObject({
            city: 'Annaberg',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Annaberg',
            speechstart: 'In'
        });
        // Axamer - Lizum
        this.pushObject({
            city: 'Axamer Lizum',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Axamer - Lizum',
            speechstart: 'In'
        });
        // Bad Hofgastein - Bad Gastein - Skischaukel Schlossalm-Angertal-Stubnerkogel
        this.pushObject({
            city: 'Bad Hofgastein',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Bad Hofgastein - Bad Gastein - Skischaukel Schlossalm-Angertal-Stubnerkogel',
            speechstart: 'In'
        });
        // Bad Kleinkirchheim
        this.pushObject({
            city: 'Bad Kleinkirchheim',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Bad Kleinkirchheim',
            speechstart: 'In'
        });
        // Bergeralm - Steinach am Brenner
        this.pushObject({
            city: 'Bergeralm',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        // Bichlbach - Berwang
        this.pushObject({
            city: 'Berwang',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Bichlbach - Berwang',
            speechstart: 'In'
        });
        // Biberwier - Marienberg
        this.pushObject({
            city: 'Biberwier',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Biberwier - Marienberg',
            speechstart: 'In'
        });
        // Bichlbach - Berwang
        this.pushObject({
            city: 'Bichlbach',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Bichlbach - Berwang',
            speechstart: 'In'
        });
        // Schwarzenberg - Bödele
        this.pushObject({
            city: 'Bödele',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Schwarzenberg - Bödele',
            speechstart: 'In'
        });
        // Brandnertal
        this.pushObject({
            city: 'Brand',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Brandnertal',
            speechstart: 'Im'
        });
        // Brandnertal
        this.pushObject({
            city: 'Brandnertal',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Brandnertal',
            speechstart: 'In'
        });
        // Brixen im Thale - SkiWelt
        this.pushObject({
            city: 'Brixen im Thale',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Brixen im Thale - SkiWelt',
            speechstart: 'In'
        });
        // Buchensteinwand
        this.pushObject({
            city: 'Buchensteinwand',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Buchensteinwand',
            speechstart: 'In'
        });
        //  
        this.pushObject({
            city: 'Bürserberg',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Brandnertal',
            speechstart: 'In'
        });
        // Achensee - Christlum
        this.pushObject({
            city: 'Christlum',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Achensee - Christlum',
            speechstart: 'In'
        });
        // Dachstein Gletscher
        this.pushObject({
            city: 'Dachstein Gletscher',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Dachstein Gletscher',
            speechstart: 'Auf dem'
        });
        // Damüls - Mellau
        this.pushObject({
            city: 'Damüls',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Damüls - Mellau',
            speechstart: 'In'
        });
        // Damüls - Mellau
        this.pushObject({
            city: 'Damüls - Mellau',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Damüls - Mellau',
            speechstart: 'Im Skigebiet'
        });
        // Diedamskopf
        this.pushObject({
            city: 'Diedamskopf',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Diedamskopf',
            speechstart: 'Auf dem'
        });
        // Dreiländereck
        this.pushObject({
            city: 'Dreiländereck',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Dreiländereck',
            speechstart: 'Im'
        });
        // Ellmau - SkiWelt
        this.pushObject({
            city: 'Ellmau',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Ellmau - SkiWelt',
            speechstart: 'In'
        });
        // Falkert
        this.pushObject({
            city: 'Falkert',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Falkert',
            speechstart: 'In'
        });
        // Fanningberg
        this.pushObject({
            city: 'Fanningberg',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Fanningberg',
            speechstart: 'In'
        });
        // Faschina - Fontanella
        this.pushObject({
            city: 'Faschina',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Faschina - Fontanella',
            speechstart: 'In'
        });
        // Faschina - Fontanella
        this.pushObject({
            city: 'Faschina Fontanella',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Faschina - Fontanella',
            speechstart: 'In'
        });
        // Feuerkogel
        this.pushObject({
            city: 'Feuerkogel',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Feuerkogel',
            speechstart: 'In'
        });
        // Fendels
        this.pushObject({
            city: 'Fendels',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Fendels',
            speechstart: 'In'
        });
        // Skicircus Saalbach Hinterglemm Leogang Fieberbrunn
        this.pushObject({
            city: 'Fieberbrunn',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Skicircus Saalbach Hinterglemm Leogang Fieberbrunn',
            speechstart: 'In'
        });
        // Filzmoos
        this.pushObject({
            city: 'Filzmoos',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Filzmoos',
            speechstart: 'In'
        });
        // Zillertal Gletscherwelt 3000 - Tux - Finkenberg
        this.pushObject({
            city: 'Finkenberg',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Zillertal Gletscherwelt 3000 - Tux - Finkenberg',
            speechstart: 'In'
        });
        // Serfaus Fiss Ladis
        this.pushObject({
            city: 'Fiss',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Serfaus Fiss Ladis',
            speechstart: 'In'
        });
        // Flachau
        this.pushObject({
            city: 'Flachau',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Flachau',
            speechstart: 'In'
        });
        // Shuttleberg Flachauwinkl - Kleinarl        
        this.pushObject({
            city: 'Flachauwinkl',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Shuttleberg Flachauwinkl - Kleinarl   ',
            speechstart: 'In'
        });
        // Landeck - Zams - Fliess - Venet
        this.pushObject({
            city: 'Fliess',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Landeck - Zams - Fliess - Venet',
            speechstart: 'In'
        });
        // Faschina - Fontanella
        this.pushObject({
            city: 'Fontanella',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Faschina - Fontanella',
            speechstart: 'In'
        });
        // Fügen - Spieljoch
        this.pushObject({
            city: 'Fügen',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Fügen - Spieljoch',
            speechstart: 'In'
        });
        // Gaberl - Stubalpe
        this.pushObject({
            city: 'Gaberl',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Gaberl - Stubalpe',
            speechstart: 'In'
        });
        // Galtür - Silvretta
        this.pushObject({
            city: 'Galtür',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Galtür - Silvretta',
            speechstart: 'In'
        });
        // Gargellen
        this.pushObject({
            city: 'Gargellen',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Gargellen',
            speechstart: 'In'
        });
        // Gerlitzen
        this.pushObject({
            city: 'Gerlitzen',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Gerlitzen',
            speechstart: 'Im Skigebiet'
        });
        // Gerlos - Zillertal ArenaZillertal Arena
        this.pushObject({
            city: 'Gerlos',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Gerlos - Zillertal Arena',
            speechstart: 'In'
        });
        // Glungezer
        this.pushObject({
            city: 'Glungezer',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Glungezer',
            speechstart: 'In'
        });
        // Goldeck Bergbahnen
        this.pushObject({
            city: 'Goldeck',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Goldeck Bergbahnen',
            speechstart: 'In'
        });
        // Goldegg
        this.pushObject({
            city: 'Goldegg',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Goldegg',
            speechstart: 'In'
        });
        // Golm
        this.pushObject({
            city: 'Golm',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Golm',
            speechstart: 'In'
        });
        // Grebenzen - St. Lambrecht
        this.pushObject({
            city: 'Grebenzen',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Grebenzen - St. Lambrecht',
            speechstart: 'In'
        });
        // Dorfgastein - Großarltal
        this.pushObject({
            city: 'Großarl',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Dorfgastein - Großarltal',
            speechstart: 'In'
        });
        // Dorfgastein - Großarltal
        this.pushObject({
            city: 'Großarltal',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Dorfgastein - Großarltal',
            speechstart: 'In'
        });
        // Großeck - Speiereck
        this.pushObject({
            city: 'Großeck',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Großeck - Speiereck',
            speechstart: 'In'
        });
        // Kasberg - Grünau
        this.pushObject({
            city: 'Grünau',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kasberg - Grünau',
            speechstart: 'In'
        });
        // Kasberg - Grünau
        this.pushObject({
            city: 'Grünau im Almtal',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kasberg - Grünau',
            speechstart: 'In'
        });
        // Hauser Kaibling - Schladming
        this.pushObject({
            city: 'Hauser Kaibling',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hauser Kaibling - Schladming',
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Heuberg',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'In'
        });
        // Heutal
        this.pushObject({
            city: 'Heutal',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Heutal',
            speechstart: 'In'
        });
        // Skicircus Saalbach Hinterglemm Leogang Fieberbrunn
        this.pushObject({
            city: 'Hinterglemm',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Skicircus Saalbach Hinterglemm Leogang Fieberbrunn',
            speechstart: 'In'
        });
        // Hintertuxer Gletscher
        this.pushObject({
            city: 'Hintertux',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Hintertuxer Gletscher',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Hintertuxer Gletscher',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hintertuxer Gletscher',
            speechstart: 'Auf dem'
        });
        // Hinterstoder
        this.pushObject({
            city: 'Hinterstoder',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Hinterstoder',
            speechstart: 'In'
        });
        // Alpenarena Hochhäderich
        this.pushObject({
            city: 'Hittisau',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Alpenarena Hochhäderich',
            speechstart: 'In'
        });
        // Hoch-Imst
        this.pushObject({
            city: 'Hoch Imst',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Imst',
            speechstart: 'In'
        });
        // Hoch-Imst
        this.pushObject({
            city: 'Hoch-Imst',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Imst',
            speechstart: 'In'
        });
        // Hoch-Ybrig
        this.pushObject({
            city: 'Hoch Ybrig',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hoch-Ybrig',
            speechstart: 'In'
        });
        // Hoch-Ybrig
        this.pushObject({
            city: 'Hoch-Ybrig',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hoch-Ybrig',
            speechstart: 'In'
        });
        // Sirnitz Albeck Hochrindl
        this.pushObject({
            city: 'Hochrindl',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Sirnitz Albeck Hochrindl',
            speechstart: 'In'
        });
        // Hochficht Böhmerwald
        this.pushObject({
            city: 'Hochficht',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hochficht Böhmerwald',
            speechstart: 'In'
        });
        // Hochfügen Zillertal
        this.pushObject({
            city: 'Hochfügen',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hochfügen Zillertal',
            speechstart: 'In'
        });
        // Obergurgl - Hochgurgl
        this.pushObject({
            city: 'Hochgurgl',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Obergurgl - Hochgurgl',
            speechstart: 'In'
        });
        // Hochkar
        this.pushObject({
            city: 'Hochkar',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hochkar',
            speechstart: 'In'
        });
        // Hochkönig
        this.pushObject({
            city: 'Hochkönig',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hochkönig',
            speechstart: 'In'
        });
        // Hochkössen
        this.pushObject({
            city: 'Hochkössen',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hochkössen',
            speechstart: 'In'
        });
        // Hochoetz
        this.pushObject({
            city: 'Hochoetz',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hochoetz',
            speechstart: 'In'
        });
        // Lienzer Bergbahnen - Zettersfeld - Hochstein
        this.pushObject({
            city: 'Hochstein',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Lienzer Bergbahnen - Zettersfeld - Hochstein',
            speechstart: 'In'
        });
        // Hochwurzen
        this.pushObject({
            city: 'Hochwurzen',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Schladming - Planai - Hochwurzen',
            speechstart: 'In'
        });
        // Hochzeiger
        this.pushObject({
            city: 'Hochzeiger',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hochzeiger',
            speechstart: 'Im Skigebiet'
        });
        // Hopfgarten im Brixental - SkiWelt
        this.pushObject({
            city: 'Hopfgarten',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hopfgarten im Brixental - SkiWelt',
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Ifen',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'In'
        });
        // Imst
        this.pushObject({
            city: 'Imst',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Imst',
            speechstart: 'In'
        });
        // Ischgl
        this.pushObject({
            city: 'Ischgl',
            host: 'skiapp.onthesnow.com',
            path: AT_PATH,
            searchStrg: 'Ischgl',
            speechstart: 'In'
        });
        // Itter - SkiWelt
        this.pushObject({
            city: 'Itter',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Itter - SkiWelt',
            speechstart: 'In'
        });
        // Hochzeiger
        this.pushObject({
            city: 'Jerzens',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hochzeiger',
            speechstart: 'In'
        });
        // Jungholz
        this.pushObject({
            city: 'Jungholz',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Jungholz',
            speechstart: 'In'
        });
        // Kappl
        this.pushObject({
            city: 'Kappl',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kappl',
            speechstart: 'In'
        });
        // Kasberg - Grünau
        this.pushObject({
            city: 'Kasberg',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kasberg - Grünau',
            speechstart: 'In'
        });
        // Topskiregion Katschberg
        this.pushObject({
            city: 'Katschberg',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Topskiregion Katschberg',
            speechstart: 'Im'
        });
        // Kaunertaler Gletscher
        this.pushObject({
            city: 'Kaunertal',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kaunertaler Gletscher',
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Kaunertaler Gletscher',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kaunertaler Gletscher',
            speechstart: 'Auf dem'
        });
        // Kitzsteinhorn - Kaprun
        this.pushObject({
            city: 'Kaprun',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        this.pushObject({
            city: 'Kaprun Kitzsteinhorn',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        // Kelchsau - SkiWelt
        this.pushObject({
            city: 'Kelchsau',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kelchsau - SkiWelt',
            speechstart: 'In'
        });
        // Shuttleberg Flachauwinkl - Kleinarl        
        this.pushObject({
            city: 'Kleinarl',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Shuttleberg Flachauwinkl - Kleinarl   ',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Kitzbühel',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kitzbühel',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Kitzsteinhorn',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        this.pushObject({
            city: 'Kitzsteinhorn Kaprun',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });





        // Klippitztörl
        this.pushObject({
            city: 'Klippitztörl',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Klippitztörl',
            speechstart: 'In'
        });
        // Koralpe
        this.pushObject({
            city: 'Koralpe',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Koralpe',
            speechstart: 'In'
        });
        // Kreischberg
        this.pushObject({
            city: 'Kreischberg',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kreischberg',
            speechstart: 'Im Skigebiet'
        });
        // Kristberg Silbertal
        this.pushObject({
            city: 'Kristberg',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kristberg Silbertal',
            speechstart: 'In'
        });
        // Kühtai
        this.pushObject({
            city: 'Kühtai',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kühtai',
            speechstart: 'In'
        });
        // Lachtal
        this.pushObject({
            city: 'Lachtal',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Lachtal',
            speechstart: 'Im'
        });
        // Serfaus Fiss Ladis
        this.pushObject({
            city: 'Ladis',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Serfaus Fiss Ladis',
            speechstart: 'In'
        });
        // Landeck - Zams - Fliess - Venet
        this.pushObject({
            city: 'Landeck',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Landeck - Zams - Fliess - Venet',
            speechstart: 'In'
        });
        // Laterns - Gapfohl
        this.pushObject({
            city: 'Laterns',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Laterns - Gapfohl',
            speechstart: 'In'
        });
        // Lech Zürs am Arlberg
        this.pushObject({
            city: 'Lech',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Lech Zürs am Arlberg',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Lech am Arlberg',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Lech Zürs am Arlberg',
            speechstart: 'In'
        });
        // Skicircus Saalbach Hinterglemm Leogang Fieberbrunn
        this.pushObject({
            city: 'Leogang',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Skicircus Saalbach Hinterglemm Leogang Fieberbrunn',
            speechstart: 'In'
        });
        // Lermoos Grubigstein
        this.pushObject({
            city: 'Lermoos',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Lermoos Grubigstein',
            speechstart: 'In'
        });
        // Lienzer Bergbahnen - Zettersfeld - Hochstein
        this.pushObject({
            city: 'Lienz',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Lienzer Bergbahnen - Zettersfeld - Hochstein',
            speechstart: 'In'
        });
        // Mallnitz
        this.pushObject({
            city: 'Mallnitz',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Ankogel',
            speechstart: 'In'
        });
        // Achensee - Maurach
        this.pushObject({
            city: 'Maurach',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Achensee - Maurach',
            speechstart: 'In'
        });
        // Mayrhofen
        this.pushObject({
            city: 'Mayrhofen',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Mayrhofen',
            speechstart: 'In'
        });
        // Melchsee - Frutt
        this.pushObject({
            city: 'Melchsee',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Melchsee - Frutt',
            speechstart: 'In'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Montafon',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Silvretta Montafon',
            speechstart: 'In',
            speechskiresort: 'Silvretta Montafon'
        });
        // Mölltaler Gletscher
        this.pushObject({
            city: 'Mölltaler Gletscher',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Mölltaler Gletscher',
            speechstart: 'Auf dem'
        });
        // Muttereralm
        this.pushObject({
            city: 'Muttereralm',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Muttereralm',
            speechstart: 'Auf der'
        });
        // Nassfeld Hermagor
        this.pushObject({
            city: 'Nassfeld',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Nassfeld Hermagor',
            speechstart: 'In'
        });
        // Nauders
        this.pushObject({
            city: 'Nauders',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Nauders',
            speechstart: 'In'
        });
        // Obergurgl - Hochgurgl
        this.pushObject({
            city: 'Obergurgl',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Obergurgl - Hochgurgl',
            speechstart: 'In'
        });
        // Obertilliach
        this.pushObject({
            city: 'Obertilliach',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Obertilliach',
            speechstart: 'In'
        });
        // Achensee - Pertisau
        this.pushObject({
            city: 'Pertisau',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Achensee - Pertisau',
            speechstart: 'In'
        });
        // Petzen
        this.pushObject({
            city: 'Petzen',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Petzen',
            speechstart: 'In'
        });
        // Schladming - Planai - Hochwurzen
        this.pushObject({
            city: 'Planai',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Schladming - Planai - Hochwurzen',
            speechstart: 'Auf der'
        });
        // Planneralm
        this.pushObject({
            city: 'Planneralm',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Planneralm',
            speechstart: 'Auf der'
        });
        // Pitztaler Gletscher
        this.pushObject({
            city: 'Pitztaler Gletscher',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Pitztaler Gletscher',
            speechstart: 'Auf dem'
        });
        this.pushObject({
            city: 'Pitztal',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Pitztaler Gletscher',
            speechstart: 'Auf dem',
            speechskiresort: 'Pitztaler Gletscher'
        });
        // Präbichl
        this.pushObject({
            city: 'Präbichl',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Präbichl',
            speechstart: 'In'
        });
        // Radstadt - Altenmarkt
        this.pushObject({
            city: 'Radstadt',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Radstadt - Altenmarkt',
            speechstart: 'In'
        });
        // Ramsau am Dachstein
        this.pushObject({
            city: 'Ramsau',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Ramsau am Dachstein',
            speechstart: 'In'
        });
        // Ramsau am Dachstein
        this.pushObject({
            city: 'Ramsau am Dachstein',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Ramsau am Dachstein',
            speechstart: 'In'
        });
        // Rauris
        this.pushObject({
            city: 'Rauris',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Rauris',
            speechstart: 'In'
        });
        // Rifflsee - Pitztal
        this.pushObject({
            city: 'Rifflsee',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Rifflsee - Pitztal',
            speechstart: 'In'
        });
        // Riesneralm
        this.pushObject({
            city: 'Riesneralm',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Riesneralm',
            speechstart: 'Auf der'
        });
        // Skicircus Saalbach Hinterglemm Leogang Fieberbrunn
        this.pushObject({
            city: 'Saalbach',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Skicircus Saalbach Hinterglemm Leogang Fieberbrunn',
            speechstart: 'In'
        });
        // Salzstiegl
        this.pushObject({
            city: 'Salzstiegl',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Salzstiegl',
            speechstart: 'In'
        });
        // St. Anton am Arlberg
        this.pushObject({
            city: 'Sankt Anton',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'St. Anton am Arlberg',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Sankt Anton am Arlberg',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'St. Anton am Arlberg',
            speechstart: 'In'
        });
        // St. Jakob im Defereggental
        this.pushObject({
            city: 'Sankt Jakob',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'St. Jakob im Defereggental',
            speechstart: 'In'
        });
        // St. Jakob im Defereggental
        this.pushObject({
            city: 'Sankt Jakob im Defereggental',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'St. Jakob im Defereggental',
            speechstart: 'In'
        });
        // St. Johann im Pongau - Alpendorf
        this.pushObject({
            city: 'Sankt Johann im Pongau',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'St. Johann im Pongau - Alpendorf',
            speechstart: 'In'
        });
        // Grebenzen - St. Lambrecht
        this.pushObject({
            city: 'Sankt Lambrecht',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Grebenzen - St. Lambrecht',
            speechstart: 'In'
        });
        // Bad Kleinkirchheim
        this.pushObject({
            city: 'Sankt Oswald',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Bad Kleinkirchheim',
            speechstart: 'In'
        });        
        // Scheffau - SkiWelt
        this.pushObject({
            city: 'Scheffau',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Scheffau - SkiWelt',
            speechstart: 'In'
        });
        // Schladming - Planai - Hochwurzen
        this.pushObject({
            city: 'Schladming',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Schladming - Planai - Hochwurzen',
            speechstart: 'In'
        });
        // Stubaital - Schlick 2000
        this.pushObject({
            city: 'Schlick',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Stubaital - Schlick 2000',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Schlick 2000',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Stubaital - Schlick 2000',
            speechstart: 'In'
        });
        // Zell am See - Schmittenhöhe
        this.pushObject({
            city: 'Schmittenhöhe',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Zell am See - Schmittenhöhe',
            speechstart: 'Auf der'
        });
        this.pushObject({
            city: 'Schmitten',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Zell am See - Schmittenhöhe',
            speechstart: 'In'
        });
        // Warth - Schröcken
        this.pushObject({
            city: 'Schröcken',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Warth - Schröcken',
            speechstart: 'In'
        });
        // Schwarzenberg - Bödele
        this.pushObject({
            city: 'Schwarzenberg',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Bödele',
            speechstart: 'In'
        });
        // Skigebiet See
        this.pushObject({
            city: 'See',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Skigebiet See',
            speechstart: 'In'
        });
        // Serfaus Fiss Ladis
        this.pushObject({
            city: 'Serfaus',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Serfaus Fiss Ladis',
            speechstart: 'In'
        });
        // Kristberg Silbertal
        this.pushObject({
            city: 'Silbertal',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Kristberg Silbertal',
            speechstart: 'In'
        });
        // Skizentrum Sillian
        this.pushObject({
            city: 'Sillian',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Skizentrum Sillian',
            speechstart: 'In'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Silvretta Montafon',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Silvretta Montafon',
            speechstart: 'In'
        });
        // Simonhöhe
        this.pushObject({
            city: 'Simonhöhe',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Simonhöhe',
            speechstart: 'Auf der'
        });
        // Sölden
        this.pushObject({
            city: 'Sölden',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Sölden',
            speechstart: 'In'
        });
        // Söll - SkiWelt
        this.pushObject({
            city: 'Söll',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Söll - SkiWelt',
            speechstart: 'In'
        });
        // Sonnenkopf
        this.pushObject({
            city: 'Sonnenkopf',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Sonnenkopf',
            speechstart: 'In'
        });
        // Großeck - Speiereck
        this.pushObject({
            city: 'Speiereck',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Großeck - Speiereck',
            speechstart: 'In'
        });
        // Sirnitz Albeck Hochrindl
        this.pushObject({
            city: 'Sirnitz',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Sirnitz Albeck Hochrindl',
            speechstart: 'In'
        });
        // 
        this.pushObject({
            city: 'Steinach am Brenner',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        // Bergeralm - Steinach am Brenner
        this.pushObject({
            city: 'Steinach am Brenner',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        // Stubaier Gletscher
        this.pushObject({
            city: 'Stubaital',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Stubaier Gletscher',
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Stubaier Gletscher',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Stubaier Gletscher',
            speechstart: 'Auf dem'
        });
        // Stuben am Arlberg
        this.pushObject({
            city: 'Stuben',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Stuben am Arlberg',
            speechstart: 'In'
        });
        // Stuben am Arlberg
        this.pushObject({
            city: 'Stuben am Arlberg',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Stuben am Arlberg',
            speechstart: 'In'
        });
        // Tauplitz
        this.pushObject({
            city: 'Tauplitz',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Tauplitz',
            speechstart: 'In'
        });
        // Tauplitzalm
        this.pushObject({
            city: 'Tauplitzalm',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Tauplitzalm',
            speechstart: 'Auf der'
        });
        // Turracher Höhe
        this.pushObject({
            city: 'Turracher Höhe',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Turracher Höhe',
            speechstart: 'Auf der'
        });
        // Zillertal Gletscherwelt 3000 - Tux - Finkenberg
        this.pushObject({
            city: 'Tux',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Zillertal Gletscherwelt 3000 - Tux - Finkenberg',
            speechstart: 'In'
        });
        // Wagrain
        this.pushObject({
            city: 'Wagrain',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Wagrain',
            speechstart: 'In'
        });
        // Zahmer Kaiser - Walchsee
        this.pushObject({
            city: 'Walchsee',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Zahmer Kaiser - Walchsee',
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Walmendingerhorn',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'In'
        });
        // Warth - Schröcken
        this.pushObject({
            city: 'Warth',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Warth - Schröcken',
            speechstart: 'In'
        });
        // Weinebene
        this.pushObject({
            city: 'Weinebene',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Weinebene',
            speechstart: 'In'
        });
        // Westendorf - SkiWelt
        this.pushObject({
            city: 'Westendorf',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Westendorf - SkiWelt',
            speechstart: 'In'
        });
        // Werfenweng
        this.pushObject({
            city: 'Werfenweng',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Werfenweng',
            speechstart: 'In'
        });
        // Wildkogel-Arena
        this.pushObject({
            city: 'Wildkogel',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Wildkogel-Arena',
            speechstart: 'In'
        });        
        // Ski Juwel Alpbachtal Wildschönau
        this.pushObject({
            city: 'Wildschönau',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Ski Juwel Alpbachtal Wildschönau',
            speechstart: 'In'
        });        
        // Wurzeralm
        this.pushObject({
            city: 'Wurzeralm',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Wurzeralm',
            speechstart: 'In'
        });
        // Landeck - Zams - Fliess - Venet
        this.pushObject({
            city: 'Venet',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Landeck - Zams - Fliess - Venet',
            speechstart: 'In'
        });
        // Vent
        this.pushObject({
            city: 'Vent',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Vent',
            speechstart: 'In'
        });
        // Zahmer Kaiser - Walchsee
        this.pushObject({
            city: 'Zahmer Kaiser',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Zahmer Kaiser - Walchsee',
            speechstart: 'Im Skigebiet'
        });
        // Landeck - Zams - Fliess - Venet
        this.pushObject({
            city: 'Zams',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Landeck - Zams - Fliess - Venet',
            speechstart: 'In'
        });
        // Zauchensee
        this.pushObject({
            city: 'Zauchensee',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Zauchensee',
            speechstart: 'In'
        });
        // Zell am See - Schmittenhöhe
        this.pushObject({
            city: 'Zell am See',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Zell am See - Schmittenhöhe',
            speechstart: 'In'
        });
        // Zell am Ziller - Zillertal Arena
        this.pushObject({
            city: 'Zell am Ziller',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Zell am Ziller - Zillertal Arena',
            speechstart: 'In'
        });
        // Lienzer Bergbahnen - Zettersfeld - Hochstein
        this.pushObject({
            city: 'Zettersfeld',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Lienzer Bergbahnen - Zettersfeld - Hochstein',
            speechstart: 'In'
        });
        // Zillertal Arena
        this.pushObject({
            city: 'Zillertal Arena',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Zillertal Arena',
            speechstart: 'In'
        });
        // Lech Zürs am Arlberg
        this.pushObject({
            city: 'Zürs',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Lech Zürs am Arlberg',
            speechstart: 'In'
        });

    }

}

module.exports = SkiinfoJsonContainer;

