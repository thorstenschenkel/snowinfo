const WebDataContainer = require('./WebDataContainer');

class SkiinfoContainer extends WebDataContainer {

    getProtocol() {
        return 'https';
    }

    constructor() {

        super('skiinfo');

        // Aletsch Arena
        this.pushObject({
            city: 'Aletsch Arena',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Aletsch Arena',
            speechstart: 'In der'
        });
        // St. Johann im Pongau - Alpendorf
        this.pushObject({
            city: 'Alpendorf',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'St. Johann im Pongau - Alpendorf',
            speechstart: 'In'
        });
        // Brunni - Alpthal - Einsiedeln - Mythen
        this.pushObject({
            city: 'Alpthal',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Brunni - Alpthal - Einsiedeln - Mythen',
            speechstart: 'In'
        });
        // Loser Bergbahnen Altaussee
        this.pushObject({
            city: 'Altaussee',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Loser Bergbahnen Altaussee',
            speechstart: 'In'
        });
        // Radstadt - Altenmarkt
        this.pushObject({
            city: 'Altenmarkt',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Radstadt - Altenmarkt',
            speechstart: 'In'
        });
        // Skiarena Andermatt-Sedrun
        this.pushObject({
            city: 'Andermatt',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Skiarena Andermatt-Sedrun',
            speechstart: 'In'
        });
        // Ankogel
        this.pushObject({
            city: 'Ankogel',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Ankogel',
            speechstart: 'In'
        });
        // Axamer - Lizum
        this.pushObject({
            city: 'Axamer Lizum',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Axamer - Lizum',
            speechstart: 'In'
        });
        // Bad Hofgastein - Bad Gastein - Skischaukel Schlossalm-Angertal-Stubnerkogel
        this.pushObject({
            city: 'Bad Hofgastein',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Bad Hofgastein - Bad Gastein - Skischaukel Schlossalm-Angertal-Stubnerkogel',
            speechstart: 'In'
        });
        // Bad Kleinkirchheim
        this.pushObject({
            city: 'Bad Kleinkirchheim',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Bad Kleinkirchheim',
            speechstart: 'In'
        });
        // Belalp - Blatten - Naters
        this.pushObject({
            city: 'Belalp',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Belalp - Blatten - Naters',
            speechstart: 'In'
        });
        // Bichlbach - Berwang
        this.pushObject({
            city: 'Berwang',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Bichlbach - Berwang',
            speechstart: 'In'
        });
        // Bichlbach - Berwang
        this.pushObject({
            city: 'Bichlbach',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Bichlbach - Berwang',
            speechstart: 'In'
        });
        // Belalp - Blatten - Naters
        this.pushObject({
            city: 'Blatten',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Belalp - Blatten - Naters',
            speechstart: 'In'
        });
        // Brandnertal
        this.pushObject({
            city: 'Brand',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Brandnertal',
            speechstart: 'Im'
        });
        // Brandnertal
        this.pushObject({
            city: 'Brandnertal',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Brandnertal',
            speechstart: 'IN'
        });
        // Brunni - Alpthal - Einsiedeln - Mythen
        this.pushObject({
            city: 'Brunni',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Brunni - Alpthal - Einsiedeln - Mythen',
            speechstart: 'In'
        });
        // Brandnertal
        this.pushObject({
            city: 'Bürserberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Brandnertal',
            speechstart: 'In'
        });
        // Dachstein Gletscher
        this.pushObject({
            city: 'Dachstein Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Dachstein Gletscher',
            speechstart: 'Auf dem'
        });
        // Damüls - Mellau
        this.pushObject({
            city: 'Damüls',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Damüls - Mellau',
            speechstart: 'In'
        });
        // Damüls - Mellau
        this.pushObject({
            city: 'Damüls - Mellau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Damüls - Mellau',
            speechstart: 'Im Skigebiet'
        });
        // Brunni - Alpthal - Einsiedeln - Mythen
        this.pushObject({
            city: 'Einsiedeln',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Brunni - Alpthal - Einsiedeln - Mythen',
            speechstart: 'In'
        });
        // Ellmau - SkiWelt
        this.pushObject({
            city: 'Ellmau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Ellmau - SkiWelt',
            speechstart: 'In'
        });
        // Engelberg
        this.pushObject({
            city: 'Engelberg',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Engelberg',
            speechstart: 'In'
        });
        // Fendels
        this.pushObject({
            city: 'Fendels',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Fendels',
            speechstart: 'In'
        });
        // Skicircus Saalbach Hinterglemm Leogang Fieberbrunn
        this.pushObject({
            city: 'Fieberbrunn',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Skicircus Saalbach Hinterglemm Leogang Fieberbrunn',
            speechstart: 'In'
        });
        // Serfaus Fiss Ladis
        this.pushObject({
            city: 'Fiss',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Serfaus Fiss Ladis',
            speechstart: 'In'
        });
        // Flachau
        this.pushObject({
            city: 'Flachau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Flachau',
            speechstart: 'In'
        });
        // Fügen - Spieljoch
        this.pushObject({
            city: 'Fügen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Fügen - Spieljoch',
            speechstart: 'In'
        });
        // Gaberl - Stubalpe
        this.pushObject({
            city: 'Gaberl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Gaberl - Stubalpe',
            speechstart: 'In'
        });
        // Galtür - Silvretta
        this.pushObject({
            city: 'Galtür',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Galtür - Silvretta',
            speechstart: 'In'
        });
        // Gargellen
        this.pushObject({
            city: 'Gargellen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Gargellen',
            speechstart: 'In'
        });
        // Gerlitzen
        this.pushObject({
            city: 'Gerlitzen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Gerlitzen',
            speechstart: 'Im Skigebiet'
        });
        // Gerlos - Zillertal ArenaZillertal Arena
        this.pushObject({
            city: 'Gerlos',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Gerlos - Zillertal Arena',
            speechstart: 'In'
        });
        // Giswil - Mörlialp
        this.pushObject({
            city: 'Giswil',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Giswil - Mörlialp',
            speechstart: 'In'
        });
        // Golm
        this.pushObject({
            city: 'Golm',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Golm',
            speechstart: 'In'
        });
        // Grebenzen - St. Lambrecht
        this.pushObject({
            city: 'Grebenzen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Grebenzen - St. Lambrecht',
            speechstart: 'In'
        });
        // Grimentz-Zinal
        this.pushObject({
            city: 'Grimentz',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Grimentz-Zinal',
            speechstart: 'In'
        });
        // Dorfgastein - Großarltal
        this.pushObject({
            city: 'Großarl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Dorfgastein - Großarltal',
            speechstart: 'In'
        });
        // Dorfgastein - Großarltal
        this.pushObject({
            city: 'Großarltal',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Dorfgastein - Großarltal',
            speechstart: 'In'
        });
        // Großeck - Speiereck
        this.pushObject({
            city: 'Großeck',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Großeck - Speiereck',
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Heuberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'In'
        });
        // Heutal
        this.pushObject({
            city: 'Heutal',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Heutal',
            speechstart: 'In'
        });
        // Skicircus Saalbach Hinterglemm Leogang Fieberbrunn
        this.pushObject({
            city: 'Hinterglemm',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Skicircus Saalbach Hinterglemm Leogang Fieberbrunn',
            speechstart: 'In'
        });
        // Hintertuxer Gletscher
        this.pushObject({
            city: 'Hintertux',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hintertuxer Gletscher',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Hintertuxer Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hintertuxer Gletscher',
            speechstart: 'Auf dem'
        });
        // Giswil - Mörlialp
        this.pushObject({
            city: 'Giswil',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Giswil - Mörlialp',
            speechstart: 'In'
        });
        // Seefeld - Gschwandtkopf
        this.pushObject({
            city: 'Gschwandtkopf',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Gschwandtkopf',
            speechstart: 'In'
        });
        // Hoch-Ybrig
        this.pushObject({
            city: 'Hoch-Ybrig',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hoch-Ybrig',
            speechstart: 'In'
        });
        // Hochfügen Zillertal
        this.pushObject({
            city: 'Hochfügen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hochfügen Zillertal',
            speechstart: 'In'
        });
        // Hochkönig
        this.pushObject({
            city: 'Hochkönig',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hochkönig',
            speechstart: 'In'
        });
        // Hochkössen
        this.pushObject({
            city: 'Hochkössen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hochkössen',
            speechstart: 'In'
        });
        // Hochoetz
        this.pushObject({
            city: 'Hochoetz',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hochoetz',
            speechstart: 'In'
        });
        // Hochwurzen
        this.pushObject({
            city: 'Hochwurzen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Schladming - Planai - Hochwurzen',
            speechstart: 'In'
        });
        // Hochzeiger
        this.pushObject({
            city: 'Hochzeiger',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hochzeiger',
            speechstart: 'Im Skigebiet'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Ifen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'In'
        });
        // Ischgl
        this.pushObject({
            city: 'Ischgl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Ischgl',
            speechstart: 'In'
        });
        // Itter - SkiWelt
        this.pushObject({
            city: 'Itter',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Itter - SkiWelt',
            speechstart: 'In'
        });
        // Hochzeiger
        this.pushObject({
            city: 'Jerzens',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hochzeiger',
            speechstart: 'In'
        });
        // Kappl
        this.pushObject({
            city: 'Kappl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kappl',
            speechstart: 'In'
        });
        // Topskiregion Katschberg
        this.pushObject({
            city: 'Katschberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Topskiregion Katschberg',
            speechstart: 'Im'
        });
        // Kaunertaler Gletscher
        this.pushObject({
            city: 'Kaunertal',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kaunertaler Gletscher',
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Kaunertaler Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kaunertaler Gletscher',
            speechstart: 'Auf dem'
        });
        // Kitzsteinhorn - Kaprun
        this.pushObject({
            city: 'Kaprun',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        this.pushObject({
            city: 'Kaprun Kitzsteinhorn',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        // Kelchsau - SkiWelt
        this.pushObject({
            city: 'Kelchsau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kelchsau - SkiWelt',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Kitzbühel',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kitzbühel',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Kitzsteinhorn',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        this.pushObject({
            city: 'Kitzsteinhorn Kaprun',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kitzsteinhorn - Kaprun',
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        // Kreischberg
        this.pushObject({
            city: 'Kreischberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kreischberg',
            speechstart: 'Im Skigebiet'
        });
        // Kühtai
        this.pushObject({
            city: 'Kühtai',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kühtai',
            speechstart: 'In'
        });
        // La Tzoumaz - Savoleyres
        this.pushObject({
            city: 'La Tzoumaz',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'La Tzoumaz - Savoleyres',
            speechstart: 'In'
        });
        // Lachtal
        this.pushObject({
            city: 'Lachtal',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Lachtal',
            speechstart: 'Im'
        });
        // Serfaus Fiss Ladis
        this.pushObject({
            city: 'Ladis',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Serfaus Fiss Ladis',
            speechstart: 'In'
        });
        // Lake Louise !!! NUR SKIINFO
        this.pushObject({
            city: 'Lake Louise',
            host: 'www.skiinfo.de', path: '/kanada/schneehoehen-schneebericht.html',
            searchStrg: 'Lake Louise',
            speechstart: 'In'
        });
        // Lötschental Lauchernalp
        this.pushObject({
            city: 'Lauchernalp',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Lötschental Lauchernalp',
            speechstart: 'In'
        });
        // Lech Zürs am Arlberg
        this.pushObject({
            city: 'Lech',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Lech Zürs am Arlberg',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Lech am Arlberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Lech Zürs am Arlberg',
            speechstart: 'In'
        });
        // Skicircus Saalbach Hinterglemm Leogang Fieberbrunn
        this.pushObject({
            city: 'Leogang',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Skicircus Saalbach Hinterglemm Leogang Fieberbrunn',
            speechstart: 'In'
        });
        // Almenwelt Lofer
        this.pushObject({
            city: 'Lofer',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Almenwelt Lofer',
            speechstart: 'In'
        });
        // Lötschental Lauchernalp
        this.pushObject({
            city: 'Lötschental',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Lötschental Lauchernalp',
            speechstart: 'In'
        });
        // Mallnitz
        this.pushObject({
            city: 'Mallnitz',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Ankogel',
            speechstart: 'In'
        });
        // Mayrhofen
        this.pushObject({
            city: 'Mayrhofen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Mayrhofen',
            speechstart: 'In'
        });
        // Brunni - Alpthal - Einsiedeln - Mythen
        this.pushObject({
            city: 'Mythen',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Brunni - Alpthal - Einsiedeln - Mythen',
            speechstart: 'In'
        });
        // Damüls - Mellau
        this.pushObject({
            city: 'Mellau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Damüls - Mellau',
            speechstart: 'In'
        });
        // Mölltaler Gletscher
        this.pushObject({
            city: 'Mölltaler Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Mölltaler Gletscher',
            speechstart: 'Auf dem'
        });
        // Giswil - Mörlialp
        this.pushObject({
            city: 'Mörlialp',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Giswil - Mörlialp',
            speechstart: 'In'
        });
        // Nassfeld Hermagor
        this.pushObject({
            city: 'Nassfeld',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Nassfeld Hermagor',
            speechstart: 'In'
        });
        // Nauders
        this.pushObject({
            city: 'Nauders',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Nauders',
            speechstart: 'In'
        });
        // Nendaz
        this.pushObject({
            city: 'Nendaz',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Nendaz',
            speechstart: 'In'
        });
        // Obergurgl - Hochgurgl
        this.pushObject({
            city: 'Obergurgl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Obergurgl - Hochgurgl',
            speechstart: 'In'
        });
        // Obertauern
        this.pushObject({
            city: 'Obertauern',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Obertauern',
            speechstart: 'In'
        });
        // Schladming - Planai - Hochwurzen
        this.pushObject({
            city: 'Planai',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Schladming - Planai - Hochwurzen',
            speechstart: 'Auf der'
        });
        // Planneralm
        this.pushObject({
            city: 'Planneralm',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Planneralm',
            speechstart: 'Auf der'
        });
        // Pitztaler Gletscher
        this.pushObject({
            city: 'Pitztaler Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Pitztaler Gletscher',
            speechstart: 'Auf dem'
        });
        this.pushObject({
            city: 'Pitztal',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Pitztaler Gletscher',
            speechstart: 'Auf dem',
            speechskiresort: 'Pitztaler Gletscher'
        });
        // Radstadt - Altenmarkt
        this.pushObject({
            city: 'Radstadt',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Radstadt - Altenmarkt',
            speechstart: 'In'
        });
        // Reiteralm
        this.pushObject({
            city: 'Reiteralm',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Reiteralm',
            speechstart: 'Auf der'
        });
        // Riesneralm
        this.pushObject({
            city: 'Riesneralm',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Riesneralm',
            speechstart: 'Auf der'
        });
        // Rigi
        this.pushObject({
            city: 'Rigi',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Rigi',
            speechstart: 'In'
        });
        // Seefeld - Rosshütte
        this.pushObject({
            city: 'Rosshütte',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Rosshütte',
            speechstart: 'In'
        });
        // Skicircus Saalbach Hinterglemm Leogang Fieberbrunn
        this.pushObject({
            city: 'Saalbach',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Skicircus Saalbach Hinterglemm Leogang Fieberbrunn',
            speechstart: 'In'
        });
        // St. Anton am Arlberg
        this.pushObject({
            city: 'Sankt Anton',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'St. Anton am Arlberg',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Sankt Anton am Arlberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'St. Anton am Arlberg',
            speechstart: 'In'
        });
        // St. Johann im Pongau - Alpendorf
        this.pushObject({
            city: 'Sankt Johann im Pongau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'St. Johann im Pongau - Alpendorf',
            speechstart: 'In'
        });
        // Grebenzen - St. Lambrecht
        this.pushObject({
            city: 'Sankt Lambrecht',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Grebenzen - St. Lambrecht',
            speechstart: 'In'
        });
        // Scheffau - SkiWelt
        this.pushObject({
            city: 'Scheffau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Scheffau - SkiWelt',
            speechstart: 'In'
        });
        // Schladming - Planai - Hochwurzen
        this.pushObject({
            city: 'Schladming',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Schladming - Planai - Hochwurzen',
            speechstart: 'In'
        });
        // Serfaus Fiss Ladis
        this.pushObject({
            city: 'Serfaus',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Serfaus Fiss Ladis',
            speechstart: 'In'
        });
        // Stubaital - Schlick 2000
        this.pushObject({
            city: 'Schlick',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Stubaital - Schlick 2000',
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Schlick 2000',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Stubaital - Schlick 2000',
            speechstart: 'In'
        });
        // Zell am See - Schmittenhöhe
        this.pushObject({
            city: 'Schmittenhöhe',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zell am See - Schmittenhöhe',
            speechstart: 'Auf der'
        });
        this.pushObject({
            city: 'Schmitten',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zell am See - Schmittenhöhe',
            speechstart: 'In'
        });
        // Warth - Schröcken
        this.pushObject({
            city: 'Schröcken',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Warth - Schröcken',
            speechstart: 'In'
        });
        // Saas Fee
        this.pushObject({
            city: 'Saas Fee',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Saas Fee',
            speechstart: 'In'
        });
        // Skiarena Andermatt-Sedrun
        this.pushObject({
            city: 'Sedrun',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Skiarena Andermatt-Sedrun',
            speechstart: 'In'
        });
        // Sölden
        this.pushObject({
            city: 'Sölden',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Sölden',
            speechstart: 'In'
        });
        // Söll - SkiWelt
        this.pushObject({
            city: 'Söll',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Söll - SkiWelt',
            speechstart: 'In'
        });
        // Großeck - Speiereck
        this.pushObject({
            city: 'Speiereck',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Großeck - Speiereck',
            speechstart: 'In'
        });
        // Stoos
        this.pushObject({
            city: 'Stoos',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Stoos',
            speechstart: 'In'
        });
        // Stubaier Gletscher
        this.pushObject({
            city: 'Stubaital',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Stubaier Gletscher',
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Stubaier Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Stubaier Gletscher',
            speechstart: 'Auf dem'
        });
        // Stuben am Arlberg
        this.pushObject({
            city: 'Stuben',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Stuben am Arlberg',
            speechstart: 'In'
        });
        // Stuben am Arlberg
        this.pushObject({
            city: 'Stuben am Arlberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Stuben am Arlberg',
            speechstart: 'In'
        });
        // Tauplitz
        this.pushObject({
            city: 'Tauplitz',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Tauplitz',
            speechstart: 'In'
        });
        // Tauplitzalm
        this.pushObject({
            city: 'Tauplitzalm',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Tauplitzalm',
            speechstart: 'Auf der'
        });
        // Thyon
        this.pushObject({
            city: 'Thyon',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Thyon',
            speechstart: 'In'
        });
        // Turracher Höhe
        this.pushObject({
            city: 'Turracher Höhe',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Turracher Höhe',
            speechstart: 'Auf der'
        });
        // Verbier
        this.pushObject({
            city: 'Verbier',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Verbier',
            speechstart: 'In'
        });
        // Veysonnaz
        this.pushObject({
            city: 'Veysonnaz',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Veysonnaz',
            speechstart: 'In'
        });
        // Wagrain
        this.pushObject({
            city: 'Wagrain',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Wagrain',
            speechstart: 'In'
        });
        // Zahmer Kaiser - Walchsee
        this.pushObject({
            city: 'Walchsee',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zahmer Kaiser - Walchsee',
            speechstart: 'In'
        });
        // Walmendingerhorn - Ifen - Heuberg
        this.pushObject({
            city: 'Walmendingerhorn',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Walmendingerhorn - Ifen - Heuberg',
            speechstart: 'In'
        });
        // Warth - Schröcken
        this.pushObject({
            city: 'Warth',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Warth - Schröcken',
            speechstart: 'In'
        });
        // Westendorf - SkiWelt
        this.pushObject({
            city: 'Westendorf',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Westendorf - SkiWelt',
            speechstart: 'In'
        });
        // Werfenweng
        this.pushObject({
            city: 'Werfenweng',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Werfenweng',
            speechstart: 'In'
        });
        // Zahmer Kaiser - Walchsee
        this.pushObject({
            city: 'Zahmer Kaiser',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zahmer Kaiser - Walchsee',
            speechstart: 'Im Skigebiet'
        });
        // Zauchensee
        this.pushObject({
            city: 'Zauchensee',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zauchensee',
            speechstart: 'In'
        });
        // Zell am See - Schmittenhöhe
        this.pushObject({
            city: 'Zell am See',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zell am See - Schmittenhöhe',
            speechstart: 'In'
        });
        // Zell am Ziller - Zillertal Arena
        this.pushObject({
            city: 'Zell am Ziller',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zell am Ziller - Zillertal Arena',
            speechstart: 'In'
        });
        // Zermatt
        this.pushObject({
            city: 'Zermatt',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Zermatt',
            speechstart: 'In'
        });
        // Zillertal Arena
        this.pushObject({
            city: 'Zillertal Arena',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zillertal Arena',
            speechstart: 'In'
        });
        // Grimentz-Zinal
        this.pushObject({
            city: 'Zinal',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Grimentz-Zinal',
            speechstart: 'In'
        });
        // Lech Zürs am Arlberg
        this.pushObject({
            city: 'Zürs',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Lech Zürs am Arlberg',
            speechstart: 'In'
        });

    }

}

module.exports = SkiinfoContainer;

/*
Achensee - Christlum
Achensee - Maurach
Achensee - Pertisau
Aichelberglifte Karlstift
Alberschwende
Alpenarena Hochhäderich
Alpl
Andelsbuch Niedere
Annaberg
Axamer - Lizum
Bad Gastein - Graukogel
Bad Gastein - Sportgastein
Bergeralm - Steinach am Brenner
Biberwier - Marienberg
Bodental
Brixen im Thale - SkiWelt
Buchensteinwand
Dachstein West
Diedamskopf
Dreiländereck
Eben
Egg Schetteregg
Ehrwalder Alm
Elferlifte Neustift
Fageralm Forstau
Falkert
Fanningberg
Faschina Fontanella
Feuerkogel
Filzmoos Neuberg
Flattnitz
Forsteralm
Frauenalpe
Freesports Arena Dachstein Krippenstein
Füssener Jöchle - Grän
Gaaler Lifte
Gaissau Hintersee
Galsterbergalm
Gemeindealpe - Mitterbach
Glasenberg - Maria Neustift
Gletscherwelt Weißsee
Glungezer
Goldeck Bergbahnen
Goldegg
Grossglockner - Heiligenblut
Großglockner Resort Kals-Matrei
Gurtis
Hauereck - St Kathrein am Hauenstein
Hauser Kaibling - Schladming
Hebalm
Heutal
Hinterstoder
Hochficht Böhmerwald
Hochkar
Hochkössen
Hochlecken Skilifte
Hochlitten Riefensberg
Hochzillertal
Hohentauern
Hopfgarten im Brixental - SkiWelt
Imst
Innerkrems
Innsbrucker Nordkettenbahnen
Jauerling
Jöchelspitze - Lechtal
Jungholz
Kaiserau
Karkogel - Abtenau
Kasberg - Grünau
Kellerjochbahn - Schwaz - Pill
Klippitztörl
Königsberg - Hollenstein/Ybbs
Koralpe
Kötschach - Mauthen
Kristberg Silbertal
Lackenhof - Ötscher
Landeck - Zams - Fliess - Venet
Laterns - Gapfohl
Lermoos Grubigstein
Lienzer Bergbahnen - Zettersfeld - Hochstein
Maiskogel - Kaprun
Mariazeller Bürgeralpe
Modriach-Winkel Hoislifte
Mönichkirchen - Mariensee
Muttereralm
Nesselwängle
Niederalpl
Obertilliach
Patscherkofel
Petzen
Planneralm
Postalm
Präbichl
Ramsau am Dachstein
Rangger Köpfl
Rauris
Reutte Hahnenkamm
Rifflsee - Pitztal
Salzstiegl
Schattwald - Zöblen
Schilifte Kirchschlag
Schladming Dachstein - Stoderzinken
Schlepplifte Neuleutasch
Schwarzenberg - Bödele
Serlesbahnen - Mieders
Shuttleberg Flachauwinkl - Kleinarl
Silvretta-Bielerhöhe
Silvretta Montafon
Simonhöhe
Sirnitz Albeck Hochrindl
Skiarena Lammeralm
Skigebiet Hochmoos - Bergbahn Leutasch
Skigebiet See
Ski Juwel Alpbachtal Wildschönau
SkiWelt Wilder Kaiser - Brixental
Skizentrum Sillian
Sonnberglifte Wald am Schoberpass
Sonnenkopf
Steinberg am Rofan
Steinplatte Waidring
Sternstein Lifte
St. Jakob im Defereggental
St. Johann i.T. - Kirchdorf
St. Johann i.T. - Oberndorf
Stuhleck - Semmering
Tannheim - Neunerköpfle
Teichalmlifte
Unterberg - Pernitz
Veitsch Brunnalm
Vent
Weinebene
Wenigzell
Wettersteinbahnen Ehrwald
Wildkogel-Arena
Wurzeralm
Zau[:ber:]g Semmering
Zillertal Gletscherwelt 3000 - Tux - Finkenberg
*/
