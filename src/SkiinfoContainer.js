const WebDataContainer = require('./WebDataContainer');

class SkiinfoContainer extends WebDataContainer {

    getProtocol() {
        return 'https';
    }

    constructor() {

        super('skiinfo');

        // Bad Kleinkirchheim
        this.pushObject({
            city: 'Bad Kleinkirchheim',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Bad Kleinkirchheim',
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
        // Obergurgl - Hochgurgl
        this.pushObject({
            city: 'Hochgurgl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Obergurgl - Hochgurgl',
            speechstart: 'In'
        });
        // Hochkönig
        this.pushObject({
            city: 'Hochkönig',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Hochkönig',
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
        // Ischgl
        this.pushObject({
            city: 'Ischgl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Ischgl',
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
        // Serfaus Fiss Ladis
        this.pushObject({
            city: 'Ladis',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Serfaus Fiss Ladis',
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
        // Mayrhofen
        this.pushObject({
            city: 'Mayrhofen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Mayrhofen',
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
        // Nauders
        this.pushObject({
            city: 'Nauders',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Nauders',
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
        // Reiteralm
        this.pushObject({
            city: 'Reiteralm',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Reiteralm',
            speechstart: 'Auf der'
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
        // Scheffau - SkiWelt
        this.pushObject({
            city: 'Scheffau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Scheffau - SkiWelt',
            speechstart: 'In'
        });
        // Schladming - Planai - Hochwurzen
        this.pushObject({
            city: 'Planai',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Schladming - Planai - Hochwurzen',
            speechstart: 'Auf der'
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
        // Turracher Höhe
        this.pushObject({
            city: 'Turracher Höhe',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Turracher Höhe',
            speechstart: 'Auf der'
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
        // Warth - Schröcken
        this.pushObject({
            city: 'Warth',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Warth - Schröcken',
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
        // Zillertal Arena
        this.pushObject({
            city: 'Zillertal Arena',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            searchStrg: 'Zillertal Arena',
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
Almenwelt Lofer
Alpenarena Hochhäderich
Alpl
Andelsbuch Niedere
Ankogel
Annaberg
Axamer - Lizum
Bad Gastein - Graukogel
Bad Gastein - Sportgastein
Bad Hofgastein - Bad Gastein - Skischaukel Schlossalm-Angertal-Stubnerkogel
Bergeralm - Steinach am Brenner
Biberwier - Marienberg
Bodental
Brandnertal
Brixen im Thale - SkiWelt
Buchensteinwand
Dachstein West
Damüls - Mellau
Diedamskopf
Dorfgastein - Großarltal
Dreiländereck
Eben
Egg Schetteregg
Ehrwalder Alm
Elferlifte Neustift
Ellmau - SkiWelt
Fageralm Forstau
Falkert
Fanningberg
Faschina Fontanella
Fendels
Feuerkogel
Filzmoos Neuberg
Flattnitz
Forsteralm
Frauenalpe
Freesports Arena Dachstein Krippenstein
Füssener Jöchle - Grän
Gaaler Lifte
Gaberl - Stubalpe
Gaissau Hintersee
Galsterbergalm
Galtür - Silvretta
Gargellen
Gemeindealpe - Mitterbach
Glasenberg - Maria Neustift
Gletscherwelt Weißsee
Glungezer
Goldeck Bergbahnen
Goldegg
Golm
Grebenzen - St. Lambrecht
Großeck - Speiereck
Grossglockner - Heiligenblut
Großglockner Resort Kals-Matrei
Gurtis
Hauereck - St Kathrein am Hauenstein
Hauser Kaibling - Schladming
Hebalm
Heutal
Hinterstoder
Hochficht Böhmerwald
Hochfügen
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
Itter - SkiWelt
Jauerling
Jöchelspitze - Lechtal
Jungholz
Kaiserau
Kappl
Karkogel - Abtenau
Kasberg - Grünau
Kelchsau - SkiWelt
Kellerjochbahn - Schwaz - Pill
Klippitztörl
Königsberg - Hollenstein/Ybbs
Koralpe
Kötschach - Mauthen
Kristberg Silbertal
Lachtal
Lackenhof - Ötscher
Landeck - Zams - Fliess - Venet
Laterns - Gapfohl
Lermoos Grubigstein
Lienzer Bergbahnen - Zettersfeld - Hochstein
Loser Bergbahnen Altaussee
Maiskogel - Kaprun
Mariazeller Bürgeralpe
Modriach-Winkel Hoislifte
Mönichkirchen - Mariensee
Muttereralm
Nassfeld Hermagor
Nesselwängle
Niederalpl
Obertilliach
Patscherkofel
Petzen
Planneralm
Postalm
Präbichl
Radstadt - Altenmarkt
Ramsau am Dachstein
Rangger Köpfl
Rauris
Reutte Hahnenkamm
Riesneralm
Rifflsee - Pitztal
Salzstiegl
Schattwald - Zöblen
Schilifte Kirchschlag
Schladming Dachstein - Stoderzinken
Schlepplifte Neuleutasch
Schwarzenberg - Bödele
Seefeld - Gschwandtkopf
Seefeld - Rosshütte
Serlesbahnen - Mieders
Shuttleberg Flachauwinkl - Kleinarl
Silvretta-Bielerhöhe
Silvretta Montafon
Simonhöhe
Sirnitz Albeck Hochrindl
Skiarena Lammeralm
Skicircus Saalbach Hinterglemm Leogang Fieberbrunn
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
St. Johann im Pongau - Alpendorf
St. Johann i.T. - Kirchdorf
St. Johann i.T. - Oberndorf
Stuhleck - Semmering
Tannheim - Neunerköpfle
Teichalmlifte
Topskiregion Katschberg
Unterberg - Pernitz
Veitsch Brunnalm
Vent
Walmendingerhorn - Ifen - Heuberg
Weinebene
Wenigzell
Werfenweng
Westendorf - SkiWelt
Wettersteinbahnen Ehrwald
Wildkogel-Arena
Wurzeralm
Zau[:ber:]g Semmering
Zillertal Gletscherwelt 3000 - Tux - Finkenberg
*/
