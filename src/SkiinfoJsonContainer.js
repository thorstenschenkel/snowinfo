const WebDataContainer = require('./WebDataContainer');

const AT_REGIONID = 242;
const USA_REGIONID = 429;
const CAN_REGIONID = 430;
const IT_REGIONID = 233;
const DE_REGIONID = 214;
const CH_REGIONID = 184;
const FR_REGIONID = 240;

// https://skiapp.onthesnow.com/app/widgets/resortlist?region=de&regionids=429&language=de&pagetype=profile&direction=1&order=resort&limit=15&offset=165&countrycode=USA&minvalue=-1&open=anystatus
const PRE_PATH = '/app/widgets/resortlist?region=de&language=de&pagetype=skireport&limit=1500&offset=0&regionids=';
const AT_PATH = PRE_PATH + AT_REGIONID;
const USA_PATH = PRE_PATH + USA_REGIONID;
const CAN_PATH = PRE_PATH + CAN_REGIONID;
const IT_PATH = PRE_PATH + IT_REGIONID;
const DE_PATH = PRE_PATH + DE_REGIONID;
const CH_PATH = PRE_PATH + CH_REGIONID;
const FR_PATH = PRE_PATH + FR_REGIONID;

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
            searchStrg: 'Galtür',
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
        // Hochmoos - Bergbahn Leutasch 
        this.pushObject({
            city: 'Hochmoos',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hochmoos - Bergbahn Leutasch',
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
        // Hochmoos - Bergbahn Leutasch 
        this.pushObject({
            city: 'Leutasch',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Hochmoos - Bergbahn Leutasch',
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
        // Silvretta Montafon
        this.pushObject({
            city: 'Schruns',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Silvretta Montafon',
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
        // Golm
        this.pushObject({
            city: 'Tschagguns',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Golm',
            speechstart: 'In'
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
        // Golm
        this.pushObject({
            city: 'Vandans',
            host: 'skiapp.onthesnow.com', path: AT_PATH,
            searchStrg: 'Golm',
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
        // Alta Badia
        this.pushObject({
            city: 'Alta Badia',
            host: 'skiapp.onthesnow.com', path: IT_PATH,
            searchStrg: 'Alta Badia',
            speechstart: 'In'
        });
        // Val Gardena - Gröden
        this.pushObject({
            city: 'Gröden',
            host: 'skiapp.onthesnow.com', path: IT_PATH,
            searchStrg: 'Val Gardena - Gröden',
            speechstart: 'In'
        });
        // Klausberg
        this.pushObject({
            city: 'Klausberg',
            host: 'skiapp.onthesnow.com', path: IT_PATH,
            searchStrg: 'Klausberg',
            speechstart: 'In'
        });
        // Plan de Corones / Kronplatz
        this.pushObject({
            city: 'Kronplatz',
            host: 'skiapp.onthesnow.com', path: IT_PATH,
            searchStrg: 'Plan de Corones / Kronplatz',
            speechstart: 'Auf dem'
        });
        // Livigno
        this.pushObject({
            city: 'Livigno',
            host: 'skiapp.onthesnow.com', path: IT_PATH,
            searchStrg: 'Livigno',
            speechstart: 'In'
        });
        // Merano 2000 / Meran 2000
        this.pushObject({
            city: 'Meran',
            host: 'skiapp.onthesnow.com', path: IT_PATH,
            searchStrg: 'Merano 2000 / Meran 2000',
            speechstart: 'In'
        });
        // Merano 2000 / Meran 2000
        this.pushObject({
            city: 'Merano',
            host: 'skiapp.onthesnow.com', path: IT_PATH,
            searchStrg: 'Merano 2000 / Meran 2000',
            speechstart: 'In'
        });
        // Obereggen - Pampeago - Predazzo
        this.pushObject({
            city: 'Obereggen',
            host: 'skiapp.onthesnow.com', path: IT_PATH,
            searchStrg: 'Obereggen - Pampeago - Predazzo',
            speechstart: 'In'
        });
        // Alpe di Siusi / Seiser Alm
        this.pushObject({
            city: 'Seiser Alm',
            host: 'skiapp.onthesnow.com', path: IT_PATH,
            searchStrg: 'Alpe di Siusi / Seiser Alm',
            speechstart: 'Auf der'
        });
        // Sulden / Solda
        this.pushObject({
            city: 'Solda',
            host: 'skiapp.onthesnow.com', path: IT_PATH,
            searchStrg: 'Sulden / Solda',
            speechstart: 'In'
        });
        // Sulden / Solda
        this.pushObject({
            city: 'Sulden',
            host: 'skiapp.onthesnow.com', path: IT_PATH,
            searchStrg: 'Sulden / Solda',
            speechstart: 'In'
        });
        // Oberjoch
        this.pushObject({
            city: 'Bad Hindelang',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Oberjoch',
            speechstart: 'In'
        });
        // Balderschwang
        this.pushObject({
            city: 'Balderschwang',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Balderschwang',
            speechstart: 'In'
        });
        // Baiersbronn
        this.pushObject({
            city: 'Baiersbronn',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Baiersbronn',
            speechstart: 'In'
        });
        // Bayrischzell
        this.pushObject({
            city: 'Sudelfeld',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Sudelfeld',
            speechstart: 'In'
        });
        // Schwarzwaldregion Belchen - Münstertal
        this.pushObject({
            city: 'Belchen',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Schwarzwaldregion Belchen - Münstertal',
            speechstart: 'In'
        });
        // Bernau im Schwarzwald
        this.pushObject({
            city: 'Bernau',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Bernau im Schwarzwald',
            speechstart: 'In'
        });
        // Skiregion Brauneck - Wegscheid
        this.pushObject({
            city: 'Brauneck',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Skiregion Brauneck - Wegscheid',
            speechstart: 'In'
        });
        // Braunlage Wurmberg
        this.pushObject({
            city: 'Braunlage',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Braunlage Wurmberg',
            speechstart: 'In'
        });
        // Feldberg Wintersportzentrum
        this.pushObject({
            city: 'Feldberg',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Feldberg Wintersportzentrum',
            speechstart: 'In'
        });
        // Oberwiesenthal - Fichtelberg
        this.pushObject({
            city: 'Fichtelberg',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Oberwiesenthal - Fichtelberg',
            speechstart: 'In'
        });
        // Geisskopf
        this.pushObject({
            city: 'Geisskopf',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Geisskopf',
            speechstart: 'In'
        });
        // Grasgehren
        this.pushObject({
            city: 'Grasgehren',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Grasgehren',
            speechstart: 'In'
        });
        // Großer Arber
        this.pushObject({
            city: 'Großer Arber',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Großer Arber',
            speechstart: 'In'
        });
        // Großer Arber
        this.pushObject({
            city: 'Grosser Arber',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Großer Arber',
            speechstart: 'In'
        });
        // Ofterschwang - Gunzesried
        this.pushObject({
            city: 'Gunzesried',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Ofterschwang - Gunzesried',
            speechstart: 'In'
        });
        // Freudenstadt Kniebis
        this.pushObject({
            city: 'Kniebis',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Freudenstadt Kniebis',
            speechstart: 'In'
        });
        // Mehliskopf
        this.pushObject({
            city: 'Mehliskopf',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Mehliskopf',
            speechstart: 'In'
        });
        // Muggenbrunn
        this.pushObject({
            city: 'Muggenbrunn',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Muggenbrunn',
            speechstart: 'In'
        });
        // Oberstdorf - Nebelhorn
        this.pushObject({
            city: 'Nebelhorn',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Oberstdorf - Nebelhorn',
            speechstart: 'Auf dem'
        });
        // Alpspitz Nesselwang
        this.pushObject({
            city: 'Nesselwang',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Alpspitz Nesselwang',
            speechstart: 'In'
        });
        // Oberstdorf - Nebelhorn
        this.pushObject({
            city: 'Oberstdorf',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Oberstdorf - Nebelhorn',
            speechstart: 'In'
        });
        // Oberjoch
        this.pushObject({
            city: 'Oberjoch',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Oberjoch',
            speechstart: 'In'
        });
        // Grasgehren
        this.pushObject({
            city: 'Obermaiselstein',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Grasgehren',
            speechstart: 'In'
        });
        // Oberwiesenthal - Fichtelberg
        this.pushObject({
            city: 'Oberwiesenthal',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Oberwiesenthal - Fichtelberg',
            speechstart: 'In'
        });
        // Ofterschwang - Gunzesried
        this.pushObject({
            city: 'Ofterschwang',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Ofterschwang - Gunzesried',
            speechstart: 'In'
        });
        // Winklmoosalm - Reit im Winkl
        this.pushObject({
            city: 'Reit im Winkl',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Winklmoosalm - Reit im Winkl',
            speechstart: 'In'
        });
        // Sankt Englmar
        this.pushObject({
            city: 'Sankt Englmar',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Sankt Englmar',
            speechstart: 'In'
        });
        // Scheidegg - Möggers
        this.pushObject({
            city: 'Scheidegg',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Scheidegg - Möggers',
            speechstart: 'In'
        });
        // Braunlage Wurmberg
        this.pushObject({
            city: 'Schierke',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Braunlage Wurmberg',
            speechstart: 'In'
        });
        // Oberstdorf - Söllereck - Höllwies
        this.pushObject({
            city: 'Söllereck',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Oberstdorf - Söllereck - Höllwies',
            speechstart: 'In'
        });
        // Spitzingsee - Tegernsee
        this.pushObject({
            city: 'Spitzingsee',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Spitzingsee - Tegernsee',
            speechstart: 'In'
        });
        // Skiarena Steibis - Imbergbahn - Oberstaufen
        this.pushObject({
            city: 'Steibis',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        // Sudelfeld
        this.pushObject({
            city: 'Sudelfeld',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Sudelfeld',
            speechstart: 'In'
        });
        // Spitzingsee - Tegernsee
        this.pushObject({
            city: 'Tegernsee',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Spitzingsee - Tegernsee',
            speechstart: 'In'
        });
        // Todtnauberg
        this.pushObject({
            city: 'Todtnauberg',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Todtnauberg',
            speechstart: 'In'
        });
        // Skizirkus Unterstmatt - Hochkopf
        this.pushObject({
            city: 'Unterstmatt',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Skizirkus Unterstmatt - Hochkopf',
            speechstart: 'In'
        });
        // Skiregion Brauneck - Wegscheid
        this.pushObject({
            city: 'Wegscheid',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Skiregion Brauneck - Wegscheid',
            speechstart: 'In'
        });
        // Willingen
        this.pushObject({
            city: 'Willingen',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Willingen',
            speechstart: 'In'
        });
        // Winklmoosalm - Reit im Winkl
        this.pushObject({
            city: 'Winklmoosalm',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Winklmoosalm - Reit im Winkl',
            speechstart: 'In'
        });
        // Braunlage Wurmberg
        this.pushObject({
            city: 'Wurmberg',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Braunlage Wurmberg',
            speechstart: 'In'
        });
        // Zugspitze
        this.pushObject({
            city: 'Zugspitze',
            host: 'skiapp.onthesnow.com', path: DE_PATH,
            searchStrg: 'Zugspitze',
            speechstart: 'In'
        });
        // Skiregion Adelboden-Lenk
        this.pushObject({
            city: 'Adelboden',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Skiregion Adelboden-Lenk',
            speechstart: 'In'
        });
        // Aletsch Arena
        this.pushObject({
            city: 'Aletsch Arena',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Aletsch Arena',
            speechstart: 'In der'
        });
        // Brunni - Alpthal - Einsiedeln - Mythen
        this.pushObject({
            city: 'Alpthal',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Brunni - Alpthal - Einsiedeln - Mythen',
            speechstart: 'In'
        });
        // Skiarena Andermatt-Sedrun
        this.pushObject({
            city: 'Andermatt',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Skiarena Andermatt-Sedrun',
            speechstart: 'In'
        });
        // Arosa Lenzerheide
        this.pushObject({
            city: 'Arosa',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Arosa Lenzerheide',
            speechstart: 'In'
        });
        // Beckenried - Klewenalp
        this.pushObject({
            city: 'Beckenried',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Beckenried - Klewenalp',
            speechstart: 'In'
        });
        // Belalp - Blatten - Naters
        this.pushObject({
            city: 'Belalp',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Belalp - Blatten - Naters',
            speechstart: 'In'
        });
        // Aletsch Arena
        this.pushObject({
            city: 'Bettmeralp',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Aletsch Arena',
            speechstart: 'Auf der'
        });
        // Belalp - Blatten - Naters
        this.pushObject({
            city: 'Blatten',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Belalp - Blatten - Naters',
            speechstart: 'In'
        });
        // Brunni - Alpthal - Einsiedeln - Mythen
        this.pushObject({
            city: 'Brunni',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Brunni - Alpthal - Einsiedeln - Mythen',
            speechstart: 'In'
        });
        // Brunni - Alpthal - Einsiedeln - Mythen
        this.pushObject({
            city: 'Einsiedeln',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Brunni - Alpthal - Einsiedeln - Mythen',
            speechstart: 'In'
        });
        // Engelberg
        this.pushObject({
            city: 'Engelberg',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Engelberg',
            speechstart: 'In'
        });
        // Aletsch Arena
        this.pushObject({
            city: 'Fiesch',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Aletsch Arena',
            speechstart: 'Auf der'
        });
        // Flumserberg - Heidiland
        this.pushObject({
            city: 'Flumserberg',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Flumserberg - Heidiland',
            speechstart: 'In'
        });
        // Giswil - Mörlialp
        this.pushObject({
            city: 'Giswil',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Giswil - Mörlialp',
            speechstart: 'In'
        });
        // Grimentz-Zinal
        this.pushObject({
            city: 'Grimentz',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Grimentz-Zinal',
            speechstart: 'In'
        });
        // Seefeld - Gschwandtkopf
        this.pushObject({
            city: 'Gschwandtkopf',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Gschwandtkopf',
            speechstart: 'In'
        });
        // Gstaad
        this.pushObject({
            city: 'Gstaad',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Gstaad',
            speechstart: 'In'
        });
        // Meiringen - Hasliberg
        this.pushObject({
            city: 'Hasliberg',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Meiringen - Hasliberg',
            speechstart: 'In'
        });
        // Beckenried - Klewenalp
        this.pushObject({
            city: 'Klewenalp',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Beckenried - Klewenalp',
            speechstart: 'In'
        });
        // La Tzoumaz - Savoleyres
        this.pushObject({
            city: 'La Tzoumaz',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'La Tzoumaz - Savoleyres',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Lötschental Lauchernalp
        this.pushObject({
            city: 'Lauchernalp',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Lötschental Lauchernalp',
            speechstart: 'In'
        });
        // Skiregion Adelboden-Lenk
        this.pushObject({
            city: 'Lenk',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Skiregion Adelboden-Lenk',
            speechstart: 'In'
        });
        // Arosa Lenzerheide
        this.pushObject({
            city: 'Lenzerheide',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Arosa Lenzerheide',
            speechstart: 'In'
        });
        // Almenwelt Lofer
        this.pushObject({
            city: 'Lofer',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Almenwelt Lofer',
            speechstart: 'In'
        });
        // Lötschental Lauchernalp
        this.pushObject({
            city: 'Lötschental',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Lötschental Lauchernalp',
            speechstart: 'In'
        });
        // Meiringen - Hasliberg
        this.pushObject({
            city: 'Meiringen',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Meiringen - Hasliberg',
            speechstart: 'In'
        });
        // Giswil - Mörlialp
        this.pushObject({
            city: 'Mörlialp',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Giswil - Mörlialp',
            speechstart: 'In'
        });
        // Obersaxen Mundaun Lumnezia
        this.pushObject({
            city: 'Mundaun',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Obersaxen Mundaun Lumnezia',
            speechstart: 'In'
        });
        // Mürren - Schilthorn
        this.pushObject({
            city: 'Mürren',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Mürren - Schilthorn',
            speechstart: 'In'
        });
        // Brunni - Alpthal - Einsiedeln - Mythen
        this.pushObject({
            city: 'Mythen',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Brunni - Alpthal - Einsiedeln - Mythen',
            speechstart: 'In'
        });
        // Nendaz
        this.pushObject({
            city: 'Nendaz',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Nendaz',
            speechstart: 'In'
        });
        // Obersaxen Mundaun Lumnezia
        this.pushObject({
            city: 'Obersaxen',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Obersaxen Mundaun Lumnezia',
            speechstart: 'In'
        });
        // Aletsch Arena
        this.pushObject({
            city: 'Riederalp',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Aletsch Arena',
            speechstart: 'Auf der'
        });
        // Rigi
        this.pushObject({
            city: 'Rigi',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Rigi',
            speechstart: 'In'
        });
        // Seefeld - Rosshütte
        this.pushObject({
            city: 'Rosshütte',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Rosshütte',
            speechstart: 'In'
        });
        // Saas Fee
        this.pushObject({
            city: 'Saas Fee',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Saas Fee',
            speechstart: 'In'
        });
        // Saas Fee
        this.pushObject({
            city: 'Saas-Fee',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Saas Fee',
            speechstart: 'In'
        });
        // Mürren - Schilthorn
        this.pushObject({
            city: 'Schilthorn',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Mürren - Schilthorn',
            speechstart: 'In'
        });
        // Skiarena Andermatt-Sedrun
        this.pushObject({
            city: 'Sedrun',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Skiarena Andermatt-Sedrun',
            speechstart: 'In'
        });
        // Sörenberg
        this.pushObject({
            city: 'Sörenberg',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Sörenberg',
            speechstart: 'In'
        });
        // Stoos
        this.pushObject({
            city: 'Stoos',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Stoos',
            speechstart: 'In'
        });
        // Thyon
        this.pushObject({
            city: 'Thyon',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Thyon',
            speechstart: 'In'
        });
        // Toggenburg
        this.pushObject({
            city: 'Toggenburg',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Toggenburg',
            speechstart: 'In'
        });
        // Verbier
        this.pushObject({
            city: 'Verbier',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Verbier',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Veysonnaz
        this.pushObject({
            city: 'Veysonnaz',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Veysonnaz',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Zermatt
        this.pushObject({
            city: 'Zermatt',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Zermatt',
            speechstart: 'In'
        });
        // Grimentz-Zinal
        this.pushObject({
            city: 'Zinal',
            host: 'skiapp.onthesnow.com', path: CH_PATH,
            searchStrg: 'Grimentz-Zinal',
            speechstart: 'In'
        });
        // Chamonix Mont-Blanc
        this.pushObject({
            city: 'Chamonix',
            host: 'skiapp.onthesnow.com', path: FR_PATH,
            searchStrg: 'Chamonix Mont-Blanc',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // La Plagne
        this.pushObject({
            city: 'La Plagne',
            host: 'skiapp.onthesnow.com', path: FR_PATH,
            searchStrg: 'La Plagne',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Les Arcs Bourg St Maurice
        this.pushObject({
            city: 'Les Arcs',
            host: 'skiapp.onthesnow.com', path: FR_PATH,
            searchStrg: 'Les Arcs Bourg St Maurice',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Chamonix Mont-Blanc
        this.pushObject({
            city: 'Mont-Blanc',
            host: 'skiapp.onthesnow.com', path: FR_PATH,
            searchStrg: 'Chamonix Mont-Blanc',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Tignes
        this.pushObject({
            city: 'Tignes',
            host: 'skiapp.onthesnow.com', path: FR_PATH,
            searchStrg: 'Tignes',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Val Thorens
        this.pushObject({
            city: 'Val Thorens',
            host: 'skiapp.onthesnow.com', path: FR_PATH,
            searchStrg: 'Val Thorens',
<<<<<<< HEAD
            speechstart: 'In'
        });
=======
            speechstart: 'In',
            lang: 'fr-FR'
        });        
>>>>>>> 7365b336ed42a9cf6b46236b845a39ba6ba248f4
        // Squaw Valley - Alpine Meadows
        this.pushObject({
            city: 'Alpine Meadows',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Squaw Valley - Alpine Meadows',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Alta Ski Area
        this.pushObject({
            city: 'Alta',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Alta Ski Area',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Arapahoe Basin Ski Area
        this.pushObject({
            city: 'Arapahoe Basin',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Arapahoe Basin Ski Area',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Aspen / Snowmass
        this.pushObject({
            city: 'Aspen',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Aspen / Snowmass',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Beaver Creek
        this.pushObject({
            city: 'Beaver Creek',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Beaver Creek',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Big Sky Resort
        this.pushObject({
            city: 'Big Sky',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Big Sky Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Big Sky Resort
        this.pushObject({
            city: 'Big Sky Resort',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Big Sky Resort',
            speechstart: 'Im',
            lang: 'en-US'
        });
        // Breckenridge
        this.pushObject({
            city: 'Breckenridge',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Breckenridge',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Copper Mountain
        this.pushObject({
            city: 'Copper Mountain',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Copper Mountain Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Copper Mountain Resort
        this.pushObject({
            city: 'Copper Mountain Resort',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Copper Mountain Resort',
            speechstart: 'Im',
            lang: 'en-US'
        });
        // Crested Butte Mountain Resort
        this.pushObject({
            city: 'Crested Butte',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Crested Butte Mountain Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Deer Valley Resort
        this.pushObject({
            city: 'Deer Valley',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Deer Valley Resort',
            speechstart: 'Im',
            lang: 'en-US'
        });
        // Heavenly
        this.pushObject({
            city: 'Heavenly',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Heavenly Mountain Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Jackson Hole
        this.pushObject({
            city: 'Jackson Hole',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Jackson Hole',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Keystone
        this.pushObject({
            city: 'Keystone',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Keystone',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Killington Resort
        this.pushObject({
            city: 'Killington',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Killington Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Whiteface Mountain Resort
        this.pushObject({
            city: 'Lake Placid',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Whiteface Mountain Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Mammoth Mountain
        this.pushObject({
            city: 'Mammoth Mountain',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Mammoth Mountain Ski Area',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Mt. Bachelor
        this.pushObject({
            city: 'Mount Bachelor',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Mt. Bachelor',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Mt. Baker
        this.pushObject({
            city: 'Mount Baker',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Mt. Baker',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Mt. Rose - Ski Tahoe
        this.pushObject({
            city: 'Mount Rose',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Mt. Rose - Ski Tahoe',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Park City
        this.pushObject({
            city: 'Park City',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Park City',
            speechstart: 'In'
        });
        // Powder Mountain
        this.pushObject({
            city: 'Powder Mountain',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Powder Mountain',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Snowbird
        this.pushObject({
            city: 'Snowbird',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Snowbird',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Aspen / Snowmass
        this.pushObject({
            city: 'Snowmass',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Aspen / Snowmass',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Squaw Valley - Alpine Meadows
        this.pushObject({
            city: 'Squaw Valley',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Squaw Valley - Alpine Meadows',
            speechstart: 'Im',
            lang: 'en-US'
        });
        // Steamboat
        this.pushObject({
            city: 'Steamboat',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Steamboat',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Stowe
        this.pushObject({
            city: 'Stowe',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Stowe Mountain Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Sugarloaf
        this.pushObject({
            city: 'Sugarloaf',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Sugarloaf',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Taos Ski Valley
        this.pushObject({
            city: 'Taos',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Taos Ski Valley',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Telluride
        this.pushObject({
            city: 'Telluride',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Telluride',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Vail
        this.pushObject({
            city: 'Vail',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Vail',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Whiteface Mountain Resort
        this.pushObject({
            city: 'Whiteface',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Whiteface Mountain Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Winter Park Resort
        this.pushObject({
            city: 'Winter Park',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Winter Park Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Winter Park Resort
        this.pushObject({
            city: 'Winter Park Resort',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Winter Park Resort',
            speechstart: 'Im',
            lang: 'en-US'
        });
        // Wolf Creek Ski Area
        this.pushObject({
            city: 'Wolf Creek',
            host: 'skiapp.onthesnow.com', path: USA_PATH,
            searchStrg: 'Wolf Creek Ski Area',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Apex Mountain
        this.pushObject({
            city: 'Apex Mountain',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Apex Mountain',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Apex Mountain
        this.pushObject({
            city: 'Apex Resort',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Apex Mountain',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Big White
        this.pushObject({
            city: 'Big White',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Big White',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Blue Mountain
        this.pushObject({
            city: 'Blue Mountain',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Blue Mountain',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Bromont, montagne d’expériences
        this.pushObject({
            city: 'Bromont',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Bromont, montagne d’expériences',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Castle Mountain
        this.pushObject({
            city: 'Castle Mountain',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Castle Mountain',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Cypress Mountain
        this.pushObject({
            city: 'Cypress Mountain',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Cypress Mountain',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Fernie
        this.pushObject({
            city: 'Fernie',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Fernie',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Hudson Bay Mountain
        this.pushObject({
            city: 'Hudson Bay Mountain',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Hudson Bay Mountain',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Grouse Mountain
        this.pushObject({
            city: 'Grouse Mountain',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Grouse Mountain',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Kicking Horse
        this.pushObject({
            city: 'Kicking Horse',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Kicking Horse',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Kimberley
        this.pushObject({
            city: 'Kimberley',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Kimberley',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Lake Louise
        this.pushObject({
            city: 'Lake Louise',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Lake Louise',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Manning Park Resort
        this.pushObject({
            city: 'Manning Park',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Manning Park Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Marmot Basin
        this.pushObject({
            city: 'Marmot Basin',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Marmot Basin',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Mont Cascades
        this.pushObject({
            city: 'Mont Cascades',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Mont Cascades',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Mont Orford
        this.pushObject({
            city: 'Mont Orford',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Mont Orford',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Mont Sainte Anne
        this.pushObject({
            city: 'Mont Sainte Anne',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Mont Sainte Anne',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Mont Sainte Anne
        this.pushObject({
            city: 'Mont-Sainte-Anne',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Mont Sainte Anne',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Mont Ste-Marie
        this.pushObject({
            city: 'Mont Ste-Marie',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Mont Ste-Marie',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Mont Sutton
        this.pushObject({
            city: 'Mont Sutton',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Mont Sutton',
            speechstart: 'In',
            lang: 'fr-FR'
        });
        // Mt Baldy
        this.pushObject({
            city: 'Mount Baldy',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Mt Baldy',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Mt. Norquay
        this.pushObject({
            city: 'Mount Norquay',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Mt. Norquay',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Mt Washington Alpine Resort
        this.pushObject({
            city: 'Mount Washington',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Mt Washington Alpine Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Nakiska Ski Area
        this.pushObject({
            city: 'Nakiska',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Nakiska Ski Area',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Tremblant
        this.pushObject({
            city: 'Mount Tremblant',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Tremblant',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Panorama Mountain
        this.pushObject({
            city: 'Panorama',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Panorama Mountain',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Panorama Mountain
        this.pushObject({
            city: 'Panorama Mountain',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Panorama Mountain',
            speechstart: 'In',
            lang: 'en-US'

        });
        // Red Resort
        this.pushObject({
            city: 'Red Mountain',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Red Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Red Resort
        this.pushObject({
            city: 'Red Resort',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Red Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Revelstoke Mountain Resort
        this.pushObject({
            city: 'Revelstoke',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Revelstoke Mountain Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Revelstoke Mountain Resort
        this.pushObject({
            city: 'Revelstoke Mountain',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Revelstoke Mountain Resort',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Stoneham
        this.pushObject({
            city: 'Stoneham',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Stoneham',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Sun Peaks
        this.pushObject({
            city: 'Sun Peaks',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Sun Peaks',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Sunshine Village
        this.pushObject({
            city: 'Sunshine Village',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Sunshine Village',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Tremblant
        this.pushObject({
            city: 'Tremblant',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Tremblant',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Whistler Blackcomb
        this.pushObject({
            city: 'Whistler',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Whistler Blackcomb',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Whistler Blackcomb
        this.pushObject({
            city: 'Whistler Blackcomb',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Whistler Blackcomb',
            speechstart: 'In',
            lang: 'en-US'
        });
        // Whitewater Ski Resort
        this.pushObject({
            city: 'Whitewater Ski Resort',
            host: 'skiapp.onthesnow.com', path: CAN_PATH,
            searchStrg: 'Whitewater',
            speechstart: 'In',
            lang: 'en-US'
        });
    }

}

module.exports = SkiinfoJsonContainer;

