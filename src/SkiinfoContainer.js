const WebDataContainer = require('./WebDataContainer');

class SkiinfoContainer extends WebDataContainer {

    constructor() {

        super('skiinfo');

        // Bad Kleinkirchheim
        this.pushObject({
            city: 'Bad Kleinkirchheim',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Bad', 'Kleinkirchheim'],
            speechstart: 'In'
        });
        // Dachstein Gletscher
        this.pushObject({
            city: 'Dachstein Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Dachstein', 'Gletscher'],
            speechstart: 'Auf dem'
        });
        // Damüls - Mellau
        this.pushObject({
            city: 'Damüls',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Damüls', 'Mellau'],
            speechstart: 'In'
        });
        // Damüls - Mellau
        this.pushObject({
            city: 'Damüls - Mellau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Damüls', 'Mellau'],
            speechstart: 'Im Skigebiet'
        });
        // Serfaus Fiss Ladis
        this.pushObject({
            city: 'Fiss',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Serfaus', 'Fiss', 'Ladis'],
            speechstart: 'In'
        });
        // Fügen - Spieljoch
        this.pushObject({
            city: 'Fügen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Fügen', 'Spieljoch'],
            speechstart: 'In'
        });
        // Gerlitzen
        this.pushObject({
            city: 'Gerlitzen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Gerlitzen'],
            speechstart: 'Im Skigebiet'
        });
        // Hintertuxer Gletscher
        this.pushObject({
            city: 'Hintertux',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Hintertuxer', 'Gletscher'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Hintertuxer Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Hintertuxer', 'Gletscher'],
            speechstart: 'Auf dem'
        });
        // Obergurgl - Hochgurgl
        this.pushObject({
            city: 'Hochgurgl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Obergurgl', 'Hochgurgl'],
            speechstart: 'In'
        });
        // Hochkönig
        this.pushObject({
            city: 'Hochkönig',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Hochkönig'],
            speechstart: 'In'
        });
        // Hochoetz
        this.pushObject({
            city: 'Hochoetz',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Hochoetz'],
            speechstart: 'In'
        });
        // Hochwurzen
        this.pushObject({
            city: 'Hochwurzen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Schladming','Planai','Hochwurzen'],
            speechstart: 'In'
        });
        // Hochzeiger
        this.pushObject({
            city: 'Hochzeiger',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Hochzeiger'],
            speechstart: 'Im Skigebiet'
        });
        // Ischgl
        this.pushObject({
            city: 'Ischgl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Ischgl'],
            speechstart: 'In'
        });
        // Hochzeiger
        this.pushObject({
            city: 'Jerzens',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Hochzeiger'],
            speechstart: 'In'
        });
        // Kaunertaler Gletscher
        this.pushObject({
            city: 'Kaunertal',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Kaunertaler', 'Gletscher'],
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Kaunertaler Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Kaunertaler', 'Gletscher'],
            speechstart: 'Auf dem'
        });
        // Kitzsteinhorn - Kaprun
        this.pushObject({
            city: 'Kaprun',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Kitzsteinhorn', 'Kaprun'],
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        this.pushObject({
            city: 'Kaprun Kitzsteinhorn',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Kitzsteinhorn', 'Kaprun'],
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        this.pushObject({
            city: 'Kitzbühel',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Kitzbühel'],
            speechstart: 'In'
        });        
        this.pushObject({
            city: 'Kitzsteinhorn',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Kitzsteinhorn', 'Kaprun'],
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        this.pushObject({
            city: 'Kitzsteinhorn Kaprun',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Kitzsteinhorn', 'Kaprun'],
            speechstart: 'Im Skigebiet',
            speechskiresort: 'Kitzsteinhorn - Kaprun'
        });
        // Kreischberg
        this.pushObject({
            city: 'Kreischberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Kreischberg'],
            speechstart: 'Im Skigebiet'
        });        
        // Kühtai
        this.pushObject({
            city: 'Kühtai',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Kühtai'],
            speechstart: 'In'
        });        
        // Serfaus Fiss Ladis
        this.pushObject({
            city: 'Ladis',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Serfaus', 'Fiss', 'Ladis'],
            speechstart: 'In'
        });
        // Lech Zürs am Arlberg
        this.pushObject({
            city: 'Lech',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Lech', 'Zürs','Arlberg'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Lech am Arlberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Lech', 'Zürs','Arlberg'],
            speechstart: 'In'
        });
        // Mayrhofen
        this.pushObject({
            city: 'Mayrhofen',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Mayrhofen'],
            speechstart: 'In'
        });
        // Damüls - Mellau
        this.pushObject({
            city: 'Mellau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Damüls', 'Mellau'],
            speechstart: 'In'
        });
        // Mölltaler Gletscher
        this.pushObject({
            city: 'Mölltaler Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Mölltaler', 'Gletscher'],
            speechstart: 'Auf dem'
        });
        // Nauders
        this.pushObject({
            city: 'Nauders',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Nauders'],
            speechstart: 'In'
        });
        // Obergurgl - Hochgurgl
        this.pushObject({
            city: 'Obergurgl',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Obergurgl', 'Hochgurgl'],
            speechstart: 'In'
        });
        // Obertauern
        this.pushObject({
            city: 'Obertauern',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Obertauern'],
            speechstart: 'In'
        });
        // Pitztaler Gletscher
        this.pushObject({
            city: 'Pitztaler Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Pitztaler', 'Gletscher'],
            speechstart: 'Auf dem'
        });
        this.pushObject({
            city: 'Pitztal',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Pitztaler', 'Gletscher'],
            speechstart: 'Auf dem',
            speechskiresort: 'Pitztaler Gletscher'
        });
        // St. Anton am Arlberg
        this.pushObject({
            city: 'Sankt Anton',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Anton','am','Arlberg'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Sankt Anton am Arlberg',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Anton','am','Arlberg'],
            speechstart: 'In'
        });
        // Scheffau - SkiWelt
        this.pushObject({
            city: 'Scheffau',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Scheffau','SkiWelt'],
            speechstart: 'In'
        });
        // Schladming - Planai - Hochwurzen
        this.pushObject({
            city: 'Planai',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Schladming','Planai','Hochwurzen'],
            speechstart: 'Auf der'
        });
        // Schladming - Planai - Hochwurzen
        this.pushObject({
            city: 'Schladming',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Schladming','Planai','Hochwurzen'],
            speechstart: 'In'
        });
        // Serfaus Fiss Ladis
        this.pushObject({
            city: 'Serfaus',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Serfaus', 'Fiss', 'Ladis'],
            speechstart: 'In'
        });
        // Stubaital - Schlick 2000
        this.pushObject({
            city: 'Schlick',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Stubaital','Schlick','2000'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Schlick 2000',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Stubaital','Schlick','2000'],
            speechstart: 'In'
        });
        // Zell am See - Schmittenhöhe
        this.pushObject({
            city: 'Schmittenhöhe',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Zell', 'am','See','Schmittenhöhe'],
            speechstart: 'Auf der'
        });
        this.pushObject({
            city: 'Schmitten',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Zell', 'am','See','Schmittenhöhe'],
            speechstart: 'In'
        });
        // Sölden
        this.pushObject({
            city: 'Sölden',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Sölden'],
            speechstart: 'In'
        });
        // Söll - SkiWelt
        this.pushObject({
            city: 'Söll',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Söll', 'SkiWelt'],
            speechstart: 'In'
        });
        // Stubaier Gletscher
        this.pushObject({
            city: 'Stubaital',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Stubaier', 'Gletscher'],
            speechstart: 'Im'
        });
        this.pushObject({
            city: 'Stubaier Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Stubaier', 'Gletscher'],
            speechstart: 'Auf dem'
        });
        // Turracher Höhe
        this.pushObject({
            city: 'Turracher Höhe',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Turracher', 'Höhe'],
            speechstart: 'Auf der'
        });
        // Wagrain
        this.pushObject({
            city: 'Wagrain',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Wagrain'],
            speechstart: 'In'
        });
        // Zauchensee
        this.pushObject({
            city: 'Zauchensee',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Zauchensee'],
            speechstart: 'In'
        });
        // Zell am See - Schmittenhöhe
        this.pushObject({
            city: 'Zell am See',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Zell', 'am','See','Schmittenhöhe'],
            speechstart: 'In'
        });
        this.pushObject({
            city: 'Zürs',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Lech', 'Zürs','Arlberg'],
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
Bichlbach - Berwang
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
Flachau
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
Gerlos - Zillertal Arena
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
Reiteralm
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
Stuben am Arlberg
Stuhleck - Semmering
Tannheim - Neunerköpfle
Tauplitzalm
Teichalmlifte
Topskiregion Katschberg
Unterberg - Pernitz
Veitsch Brunnalm
Vent
Walmendingerhorn - Ifen - Heuberg
Warth - Schröcken
Weinebene
Wenigzell
Werfenweng
Westendorf - SkiWelt
Wettersteinbahnen Ehrwald
Wildkogel-Arena
Wurzeralm
Zahmer Kaiser - Walchsee
Zau[:ber:]g Semmering
Zell am Ziller - Zillertal Arena
Zillertal Arena
Zillertal Gletscherwelt 3000 - Tux - Finkenberg
*/
