const WebDataContainer = require('./WebDataContainer');

class SkiinfoContainer extends WebDataContainer {

    getProtocol() {
        return 'https';
    }

    constructor() {

        super('skiinfo');

        // Skiregion Adelboden-Lenk
        this.pushObject({
            city: 'Adelboden',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Skiregion Adelboden-Lenk',
            speechstart: 'In'
        });
        // Sirnitz Albeck Hochrindl
        this.pushObject({
            city: 'Albeck',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Sirnitz Albeck Hochrindl',
            speechstart: 'In'
        });
        // Alberschwende
        this.pushObject({
            city: 'Alberschwende',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Alberschwende',
            speechstart: 'In'
        });
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
        // Alta Badia
        this.pushObject({
            city: 'Alta Badia',
            host: 'www.skiinfo.de', path: '/italien/schneehoehen-schneebericht.html',
            searchStrg: 'Alta Badia',
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
        // Andelsbuch Niedere
        this.pushObject({
            city: 'Andelsbuch',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Andelsbuch Niedere',
            speechstart: 'In'
        });
        // Ankogel
        this.pushObject({
            city: 'Ankogel',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Ankogel',
            speechstart: 'In'
        });
        // Annaberg
        this.pushObject({
            city: 'Annaberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Annaberg',
            speechstart: 'In'
        });
        // Arosa Lenzerheide
        this.pushObject({
            city: 'Arosa',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Arosa Lenzerheide',
            speechstart: 'In'
        });
        // Axamer - Lizum
        this.pushObject({
            city: 'Axamer Lizum',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Axamer - Lizum',
            speechstart: 'In'
        });
        // Oberjoch
        this.pushObject({
            city: 'Bad Hindelang',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Oberjoch',
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
        // Balderschwang
        this.pushObject({
            city: 'Balderschwang',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Balderschwang',
            speechstart: 'In'
        });
        // Baiersbronn
        this.pushObject({
            city: 'Baiersbronn',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Baiersbronn',
            speechstart: 'In'
        });
        // Bayrischzell
        this.pushObject({
            city: 'Sudelfeld',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Sudelfeld',
            speechstart: 'In'
        });
        // Beckenried - Klewenalp
        this.pushObject({
            city: 'Beckenried',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Beckenried - Klewenalp',
            speechstart: 'In'
        });
        // Belalp - Blatten - Naters
        this.pushObject({
            city: 'Belalp',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Belalp - Blatten - Naters',
            speechstart: 'In'
        });
        // Bergeralm - Steinach am Brenner
        this.pushObject({
            city: 'Bergeralm',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        // Aletsch Arena
        this.pushObject({
            city: 'Bettmeralp',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Aletsch Arena',
            speechstart: 'Auf der'
        });
        // Bichlbach - Berwang
        this.pushObject({
            city: 'Berwang',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Bichlbach - Berwang',
            speechstart: 'In'
        });
        // Biberwier - Marienberg
        this.pushObject({
            city: 'Biberwier',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Biberwier - Marienberg',
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
        // Schwarzenberg - Bödele
        this.pushObject({
            city: 'Bödele',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Schwarzenberg - Bödele',
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
            speechstart: 'In'
        });
        // Brixen im Thale - SkiWelt
        this.pushObject({
            city: 'Brixen im Thale',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Brixen im Thale - SkiWelt',
            speechstart: 'In'
        });
        // Brunni - Alpthal - Einsiedeln - Mythen
        this.pushObject({
            city: 'Brunni',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Brunni - Alpthal - Einsiedeln - Mythen',
            speechstart: 'In'
        });
        // Buchensteinwand        
        this.pushObject({
            city: 'Buchensteinwand',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Buchensteinwand',
            speechstart: 'In'
        });
        //  
        this.pushObject({
            city: 'Bürserberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Brandnertal',
            speechstart: 'In'
        });
        // Achensee - Christlum
        this.pushObject({
            city: 'Christlum',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Achensee - Christlum',
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
        // Diedamskopf
        this.pushObject({
            city: 'Diedamskopf',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Diedamskopf',
            speechstart: 'Auf dem'
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
        // Falkert
        this.pushObject({
            city: 'Falkert',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Falkert',
            speechstart: 'In'
        });
        // Fanningberg
        this.pushObject({
            city: 'Fanningberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Fanningberg',
            speechstart: 'In'
        });
        // Faschina - Fontanella
        this.pushObject({
            city: 'Faschina',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Faschina - Fontanella',
            speechstart: 'In'
        });
        // Faschina - Fontanella
        this.pushObject({
            city: 'Faschina Fontanella',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Faschina - Fontanella',
            speechstart: 'In'
        });
        // Feldberg Wintersportzentrum
        this.pushObject({
            city: 'Feldberg',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Feldberg Wintersportzentrum',
            speechstart: 'In'
        });
        // Feuerkogel
        this.pushObject({
            city: 'Feuerkogel',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Feuerkogel',
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
        // Aletsch Arena
        this.pushObject({
            city: 'Fiesch',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Aletsch Arena',
            speechstart: 'Auf der'
        });
        // Filzmoos
        this.pushObject({
            city: 'Filzmoos',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Filzmoos',
            speechstart: 'In'
        });
        // Zillertal Gletscherwelt 3000 - Tux - Finkenberg
        this.pushObject({
            city: 'Finkenberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zillertal Gletscherwelt 3000 - Tux - Finkenberg',
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
        // Shuttleberg Flachauwinkl - Kleinarl        
        this.pushObject({
            city: 'Flachauwinkl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Shuttleberg Flachauwinkl - Kleinarl   ',
            speechstart: 'In'
        });
        // Landeck - Zams - Fliess - Venet
        this.pushObject({
            city: 'Fliess',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Landeck - Zams - Fliess - Venet',
            speechstart: 'In'
        });
        // Faschina - Fontanella
        this.pushObject({
            city: 'Fontanella',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Faschina - Fontanella',
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
        // Geisskopf
        this.pushObject({
            city: 'Geisskopf',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Geisskopf',
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
        // Glungezer
        this.pushObject({
            city: 'Glungezer',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Glungezer',
            speechstart: 'In'
        });
        // Grasgehren
        this.pushObject({
            city: 'Grasgehren',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Grasgehren',
            speechstart: 'In'
        });
        // Kasberg - Grünau
        this.pushObject({
            city: 'Grünau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kasberg - Grünau',
            speechstart: 'In'
        });
        // Kasberg - Grünau
        this.pushObject({
            city: 'Grünau im Almtal',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kasberg - Grünau',
            speechstart: 'In'
        });
        // Goldegg
        this.pushObject({
            city: 'Goldegg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Goldegg',
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
        // Großer Arber
        this.pushObject({
            city: 'Großer Arber',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Großer Arber',
            speechstart: 'In'
        });
        // Großer Arber
        this.pushObject({
            city: 'Grosser Arber',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Großer Arber',
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
        // Val Gardena - Gröden
        this.pushObject({
            city: 'Gröden',
            host: 'www.skiinfo.de', path: '/italien/schneehoehen-schneebericht.html',
            searchStrg: 'Val Gardena - Gröden',
            speechstart: 'In'
        });        
        // Seefeld - Gschwandtkopf
        this.pushObject({
            city: 'Gschwandtkopf',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Gschwandtkopf',
            speechstart: 'In'
        });
        // Gstaad
        this.pushObject({
            city: 'Gstaad',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Gstaad',
            speechstart: 'In'
        });
        // Ofterschwang - Gunzesried
        this.pushObject({
            city: 'Gunzesried',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Ofterschwang - Gunzesried',
            speechstart: 'In'
        });        
        // Hauser Kaibling - Schladming
        this.pushObject({
            city: 'Hauser Kaibling',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hauser Kaibling - Schladming',
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
        // Hinterstoder
        this.pushObject({
            city: 'Hinterstoder',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hinterstoder',
            speechstart: 'In'
        });
        // Alpenarena Hochhäderich
        this.pushObject({
            city: 'Hittisau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Alpenarena Hochhäderich',
            speechstart: 'In'
        });
        // Hoch-Imst
        this.pushObject({
            city: 'Hoch-Imst',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Imst',
            speechstart: 'In'
        });        
        // Hoch-Ybrig
        this.pushObject({
            city: 'Hoch-Ybrig',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hoch-Ybrig',
            speechstart: 'In'
        });
        // Sirnitz Albeck Hochrindl
        this.pushObject({
            city: 'Hochrindl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Sirnitz Albeck Hochrindl',
            speechstart: 'In'
        });
        // Hochficht Böhmerwald
        this.pushObject({
            city: 'Hochficht',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hochficht Böhmerwald',
            speechstart: 'In'
        });
        // Hochfügen Zillertal
        this.pushObject({
            city: 'Hochfügen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hochfügen Zillertal',
            speechstart: 'In'
        });
        // Obergurgl - Hochgurgl
        this.pushObject({
            city: 'Hochgurgl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Obergurgl - Hochgurgl',
            speechstart: 'In'
        });
        // Hochkar
        this.pushObject({
            city: 'Hochkar',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hochkar',
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
        // Lienzer Bergbahnen - Zettersfeld - Hochstein
        this.pushObject({
            city: 'Hochstein',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Lienzer Bergbahnen - Zettersfeld - Hochstein',
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
        // Imst
        this.pushObject({
            city: 'Imst',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Imst',
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
        // Jungholz
        this.pushObject({
            city: 'Jungholz',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Jungholz',
            speechstart: 'In'
        });
        // Kappl
        this.pushObject({
            city: 'Kappl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kappl',
            speechstart: 'In'
        });
        // Kasberg - Grünau
        this.pushObject({
            city: 'Kasberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kasberg - Grünau',
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
        // Shuttleberg Flachauwinkl - Kleinarl        
        this.pushObject({
            city: 'Kleinarl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Shuttleberg Flachauwinkl - Kleinarl   ',
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
        // Klausberg
        this.pushObject({
            city: 'Klausberg',
            host: 'www.skiinfo.de', path: '/italien/schneehoehen-schneebericht.html',
            searchStrg: 'Klausberg',
            speechstart: 'In'
        });                
        // Beckenried - Klewenalp
        this.pushObject({
            city: 'Klewenalp',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Beckenried - Klewenalp',
            speechstart: 'In'
        });
        // Klippitztörl
        this.pushObject({
            city: 'Klippitztörl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Klippitztörl',
            speechstart: 'In'
        });
        // Koralpe
        this.pushObject({
            city: 'Koralpe',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Koralpe',
            speechstart: 'In'
        });
        // Kreischberg
        this.pushObject({
            city: 'Kreischberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kreischberg',
            speechstart: 'Im Skigebiet'
        });
        // Kristberg Silbertal
        this.pushObject({
            city: 'Kristberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kristberg Silbertal',
            speechstart: 'In'
        });
        // Plan de Corones / Kronplatz
        this.pushObject({
            city: 'Kronplatz',
            host: 'www.skiinfo.de', path: '/italien/schneehoehen-schneebericht.html',
            searchStrg: 'Alpe di Siusi / Seiser Alm',
            speechstart: 'Auf dem'
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
        // Landeck - Zams - Fliess - Venet
        this.pushObject({
            city: 'Landeck',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Landeck - Zams - Fliess - Venet',
            speechstart: 'In'
        });
        // Laterns - Gapfohl
        this.pushObject({
            city: 'Laterns',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Laterns - Gapfohl',
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
        // Skiregion Adelboden-Lenk
        this.pushObject({
            city: 'Lenk',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Skiregion Adelboden-Lenk',
            speechstart: 'In'
        });
        // Arosa Lenzerheide
        this.pushObject({
            city: 'Lenzerheide',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Arosa Lenzerheide',
            speechstart: 'In'
        });
        // Skicircus Saalbach Hinterglemm Leogang Fieberbrunn
        this.pushObject({
            city: 'Leogang',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Skicircus Saalbach Hinterglemm Leogang Fieberbrunn',
            speechstart: 'In'
        });
        // Lermoos Grubigstein
        this.pushObject({
            city: 'Lermoos',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Lermoos Grubigstein',
            speechstart: 'In'
        });
        // Lienzer Bergbahnen - Zettersfeld - Hochstein
        this.pushObject({
            city: 'Lienz',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Lienzer Bergbahnen - Zettersfeld - Hochstein',
            speechstart: 'In'
        });
        // Livigno
        this.pushObject({
            city: 'Livigno',
            host: 'www.skiinfo.de', path: '/italien/schneehoehen-schneebericht.html',
            searchStrg: 'Livigno',
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
        // Achensee - Maurach
        this.pushObject({
            city: 'Maurach',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Achensee - Maurach',
            speechstart: 'In'
        });
        // Mayrhofen
        this.pushObject({
            city: 'Mayrhofen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Mayrhofen',
            speechstart: 'In'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Montafon',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Silvretta Montafon',
            speechstart: 'In',
            speechskiresort: 'Silvretta Montafon'
        });
        // Brunni - Alpthal - Einsiedeln - Mythen
        this.pushObject({
            city: 'Mythen',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Brunni - Alpthal - Einsiedeln - Mythen',
            speechstart: 'In'
        });
        // Melchsee - Frutt
        this.pushObject({
            city: 'Melchsee',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Melchsee - Frutt',
            speechstart: 'In'
        });
        // Merano 2000 / Meran 2000
        this.pushObject({
            city: 'Meran',
            host: 'www.skiinfo.de', path: '/italien/schneehoehen-schneebericht.html',
            searchStrg: 'Merano 2000 / Meran 2000',
            speechstart: 'In'
        });        
        // Merano 2000 / Meran 2000
        this.pushObject({
            city: 'Merano',
            host: 'www.skiinfo.de', path: '/italien/schneehoehen-schneebericht.html',
            searchStrg: 'Merano 2000 / Meran 2000',
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
        // Muggenbrunn
        this.pushObject({
            city: 'Muggenbrunn',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Muggenbrunn',
            speechstart: 'In'
        });
        // Brunni - Alpthal - Einsiedeln - Mythen
        this.pushObject({
            city: 'Mythen',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Brunni - Alpthal - Einsiedeln - Mythen',
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
        // Oberstdorf - Nebelhorn
        this.pushObject({
            city: 'Nebelhorn',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Oberstdorf - Nebelhorn',
            speechstart: 'Auf dem'
        });
        // Nendaz
        this.pushObject({
            city: 'Nendaz',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Nendaz',
            speechstart: 'In'
        });
        // Alpspitz Nesselwang
        this.pushObject({
            city: 'Nesselwang',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Alpspitz Nesselwang',
            speechstart: 'In'
        });
        // Obereggen - Pampeago - Predazzo
        this.pushObject({
            city: 'Obereggen',
            host: 'www.skiinfo.de', path: '/italien/schneehoehen-schneebericht.html',
            searchStrg: 'Obereggen - Pampeago - Predazzo',
            speechstart: 'In'
        });        
        // Obergurgl - Hochgurgl
        this.pushObject({
            city: 'Obergurgl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Obergurgl - Hochgurgl',
            speechstart: 'In'
        });
        // Oberstdorf - Nebelhorn
        this.pushObject({
            city: 'Oberstdorf',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Oberstdorf - Nebelhorn',
            speechstart: 'In'
        });
        // Oberjoch
        this.pushObject({
            city: 'Oberjoch',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Oberjoch',
            speechstart: 'In'
        });
        // Grasgehren
        this.pushObject({
            city: 'Obermaiselstein',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Grasgehren',
            speechstart: 'In'
        });        
        // Obertilliach
        this.pushObject({
            city: 'Obertilliach',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Obertilliach',
            speechstart: 'In'
        });
        // Ofterschwang - Gunzesried
        this.pushObject({
            city: 'Ofterschwang',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Ofterschwang - Gunzesried',
            speechstart: 'In'
        });
        // Achensee - Pertisau
        this.pushObject({
            city: 'Pertisau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Achensee - Pertisau',
            speechstart: 'In'
        });
        // Petzen
        this.pushObject({
            city: 'Petzen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Petzen',
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
        // Präbichl
        this.pushObject({
            city: 'Präbichl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Präbichl',
            speechstart: 'In'
        });
        // Radstadt - Altenmarkt
        this.pushObject({
            city: 'Radstadt',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Radstadt - Altenmarkt',
            speechstart: 'In'
        });
        // Ramsau am Dachstein
        this.pushObject({
            city: 'Ramsau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Ramsau am Dachstein',
            speechstart: 'In'
        });
        // Ramsau am Dachstein
        this.pushObject({
            city: 'Ramsau am Dachstein',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Ramsau am Dachstein',
            speechstart: 'In'
        });
        // Rauris
        this.pushObject({
            city: 'Rauris',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Rauris',
            speechstart: 'In'
        });
        // Rifflsee - Pitztal
        this.pushObject({
            city: 'Rifflsee',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Rifflsee - Pitztal',
            speechstart: 'In'
        });
        // Muggenbrunn
        this.pushObject({
            city: 'Muggenbrunn',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Muggenbrunn',
            speechstart: 'In'
        });
        // Winklmoosalm - Reit im Winkl
        this.pushObject({
            city: 'Reit im Winkl',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Winklmoosalm - Reit im Winkl',
            speechstart: 'In'
        });
        // Aletsch Arena
        this.pushObject({
            city: 'Riederalp',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Aletsch Arena',
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
        // Saas Fee
        this.pushObject({
            city: 'Saas Fee',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Saas Fee',
            speechstart: 'In'
        });
        // Salzstiegl
        this.pushObject({
            city: 'Salzstiegl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Salzstiegl',
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
        // Sankt Englmar
        this.pushObject({
            city: 'Sankt Englmar',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Sankt Englmar',
            speechstart: 'In'
        });
        // St. Jakob im Defereggental
        this.pushObject({
            city: 'Sankt Jakob',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'St. Jakob im Defereggental',
            speechstart: 'In'
        });
        // St. Jakob im Defereggental
        this.pushObject({
            city: 'Sankt Jakob im Defereggental',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'St. Jakob im Defereggental',
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
        // Schwarzenberg - Bödele
        this.pushObject({
            city: 'Schwarzenberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Bödele',
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
        // Skiarena Andermatt-Sedrun
        this.pushObject({
            city: 'Sedrun',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Skiarena Andermatt-Sedrun',
            speechstart: 'In'
        });
        // Skigebiet See
        this.pushObject({
            city: 'See',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Skigebiet See',
            speechstart: 'In'
        });
        // Alpe di Siusi / Seiser Alm
        this.pushObject({
            city: 'Seiser Alm',
            host: 'www.skiinfo.de', path: '/italien/schneehoehen-schneebericht.html',
            searchStrg: 'Alpe di Siusi / Seiser Alm',
            speechstart: 'In'
        });
        // Serfaus Fiss Ladis
        this.pushObject({
            city: 'Serfaus',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Serfaus Fiss Ladis',
            speechstart: 'In'
        });
        // Kristberg Silbertal
        this.pushObject({
            city: 'Silbertal',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Kristberg Silbertal',
            speechstart: 'In'
        });        
        // Skizentrum Sillian
        this.pushObject({
            city: 'Sillian',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Skizentrum Sillian',
            speechstart: 'In'
        });
        // Silvretta Montafon
        this.pushObject({
            city: 'Silvretta Montafon',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Silvretta Montafon',
            speechstart: 'In'
        });
        // Simonhöhe
        this.pushObject({
            city: 'Simonhöhe',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Simonhöhe',
            speechstart: 'Auf der'
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
        // Oberstdorf - Söllereck - Höllwies
        this.pushObject({
            city: 'Söllereck',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Oberstdorf - Söllereck - Höllwies',
            speechstart: 'In'
        });
        // Sörenberg
        this.pushObject({
            city: 'Sörenberg',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Sörenberg',
            speechstart: 'In'
        });
        // Sulden / Solda
        this.pushObject({
            city: 'Solda',
            host: 'www.skiinfo.de', path: '/italien/schneehoehen-schneebericht.html',
            searchStrg: 'Sulden / Solda',
            speechstart: 'In'
        });        
        // Sonnenkopf
        this.pushObject({
            city: 'Sonnenkopf',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Sonnenkopf',
            speechstart: 'In'
        });        
        // Großeck - Speiereck
        this.pushObject({
            city: 'Speiereck',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Großeck - Speiereck',
            speechstart: 'In'
        });
        // Spitzingsee - Tegernsee
        this.pushObject({
            city: 'Spitzingsee',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Spitzingsee - Tegernsee',
            speechstart: 'In'
        });        
        // Stoos
        this.pushObject({
            city: 'Stoos',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Stoos',
            speechstart: 'In'
        });
        // Sirnitz Albeck Hochrindl
        this.pushObject({
            city: 'Sirnitz',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Sirnitz Albeck Hochrindl',
            speechstart: 'In'
        });
        // 
        this.pushObject({
            city: 'Steinach am Brenner',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        // Skiarena Steibis - Imbergbahn - Oberstaufen
        this.pushObject({
            city: 'Steibis',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Bergeralm - Steinach am Brenner',
            speechstart: 'In'
        });
        // Bergeralm - Steinach am Brenner
        this.pushObject({
            city: 'Steinach am Brenner',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Bergeralm - Steinach am Brenner',
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
        // Sulden / Solda
        this.pushObject({
            city: 'Sulden',
            host: 'www.skiinfo.de', path: '/italien/schneehoehen-schneebericht.html',
            searchStrg: 'Sulden / Solda',
            speechstart: 'In'
        });
        // Sudelfeld
        this.pushObject({
            city: 'Sudelfeld',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Sudelfeld',
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
        // Spitzingsee - Tegernsee
        this.pushObject({
            city: 'Tegernsee',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Spitzingsee - Tegernsee',
            speechstart: 'In'
        });        
        // Thyon
        this.pushObject({
            city: 'Thyon',
            host: 'www.skiinfo.de', path: '/schweiz/schneehoehen-schneebericht.html',
            searchStrg: 'Thyon',
            speechstart: 'In'
        });
        // Todtnauberg
        this.pushObject({
            city: 'Todtnauberg',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Todtnauberg',
            speechstart: 'In'
        });
        // Turracher Höhe
        this.pushObject({
            city: 'Turracher Höhe',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Turracher Höhe',
            speechstart: 'Auf der'
        });
        // Zillertal Gletscherwelt 3000 - Tux - Finkenberg
        this.pushObject({
            city: 'Tux',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zillertal Gletscherwelt 3000 - Tux - Finkenberg',
            speechstart: 'In'
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
        // Weinebene
        this.pushObject({
            city: 'Weinebene',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Weinebene',
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
        // Willingen
        this.pushObject({
            city: 'Willingen',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Willingen',
            speechstart: 'In'
        });
        // Winklmoosalm - Reit im Winkl
        this.pushObject({
            city: 'Winklmoosalm',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Winklmoosalm - Reit im Winkl',
            speechstart: 'In'
        });
        // Wurzeralm
        this.pushObject({
            city: 'Wurzeralm',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Wurzeralm',
            speechstart: 'In'
        });
        // Landeck - Zams - Fliess - Venet
        this.pushObject({
            city: 'Venet',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Landeck - Zams - Fliess - Venet',
            speechstart: 'In'
        });
        // Vent
        this.pushObject({
            city: 'Vent',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Vent',
            speechstart: 'In'
        });
        // Zahmer Kaiser - Walchsee
        this.pushObject({
            city: 'Zahmer Kaiser',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zahmer Kaiser - Walchsee',
            speechstart: 'Im Skigebiet'
        });
        // Landeck - Zams - Fliess - Venet
        this.pushObject({
            city: 'Zams',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Landeck - Zams - Fliess - Venet',
            speechstart: 'In'
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
        // Lienzer Bergbahnen - Zettersfeld - Hochstein
        this.pushObject({
            city: 'Zettersfeld',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Lienzer Bergbahnen - Zettersfeld - Hochstein',
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
        // Zugspitze
        this.pushObject({
            city: 'Zugspitze',
            host: 'www.skiinfo.de', path: '/deutschland/schneehoehen-schneebericht.html',
            searchStrg: 'Zugspitze',
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

/* OESTERREICH
1/3 Aichelberglifte Karlstift
0/8 Alpl
0/3 Bad Gastein - Graukogel
2/3 Bad Gastein - Sportgastein
?/2 Bodental
Dachstein West
Dreiländereck
4/4 Eben
5/6 Egg Schetteregg
6/8 Ehrwalder Alm
Elferlifte Neustift
0/7 Fageralm Forstau
3/4 Flattnitz
2/6 Forsteralm
Freesports Arena Dachstein Krippenstein
4/4 Füssener Jöchle - Grän
Gaaler Lifte
Gaissau Hintersee
5/5 Galsterbergalm
Gemeindealpe - Mitterbach
Glasenberg - Maria Neustift
Gletscherwelt Weißsee
Goldeck Bergbahnen
Grossglockner - Heiligenblut
Großglockner Resort Kals-Matrei
0/3 Gurtis
Hauereck - St Kathrein am Hauenstein
2/3 Hebalm
Hochlecken Skilifte
Hochlitten Riefensberg
Hochzillertal
Hohentauern
Hopfgarten im Brixental - SkiWelt
2/9 Innerkrems
Innsbrucker Nordkettenbahnen
-/2 Jauerling
0/2 Jöchelspitze - Lechtal
0/3 Kaiserau
0/4 Karkogel - Abtenau
2/4 Kellerjochbahn - Schwaz - Pill
-/6 Königsberg - Hollenstein/Ybbs
0/4 Kötschach - Mauthen
5/9 Lackenhof - Ötscher
Maiskogel - Kaprun
4/5 Mariazeller Bürgeralpe
3/4 Modriach-Winkel Hoislifte
5/5 Mönichkirchen - Mariensee
4/4 Muttereralm
3/5 Nesselwängle
5/5 Niederalpl
0/8 Patscherkofel
4/4 Planneralm
4/4 Postalm
4/9 Rangger Köpfl
Reutte Hahnenkamm
4/4 Schattwald - Zöblen
Schilifte Kirchschlag
Schladming Dachstein - Stoderzinken
Schlepplifte Neuleutasch
Serlesbahnen - Mieders
Silvretta-Bielerhöhe
0/3 Skiarena Lammeralm
0/3 Skigebiet Hochmoos - Bergbahn Leutasch
Ski Juwel Alpbachtal Wildschönau
SkiWelt Wilder Kaiser - Brixental
Sonnberglifte Wald am Schoberpass
2/2 Steinberg am Rofan
Steinplatte Waidring
2/3 Sternstein Lifte
St. Johann i.T. - Kirchdorf
St. Johann i.T. - Oberndorf
Stuhleck - Semmering
Tannheim - Neunerköpfle
Teichalmlifte
Unterberg - Pernitz
Veitsch Brunnalm
2/2 Wenigzell
Wettersteinbahnen Ehrwald
Wildkogel-Arena
2/3 Zau[:ber:]g Semmering
*/
