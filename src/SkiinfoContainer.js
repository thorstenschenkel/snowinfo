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
        // Hochkönig
        this.pushObject({
            city: 'Hochkönig',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Hochkönig'],
            speechstart: 'In'
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
        // Hochwurzen
        this.pushObject({
            city: 'Schladming',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Schladming','Planai','Hochwurzen'],
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
            speechskirresort: 'Kitzsteinhorn - Kaprun'
        });
        this.pushObject({
            city: 'Kaprun Kitzsteinhorn',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Kitzsteinhorn', 'Kaprun'],
            speechstart: 'Im Skigebiet',
            speechskirresort: 'Kitzsteinhorn - Kaprun'
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
            speechskirresort: 'Kitzsteinhorn - Kaprun'
        });
        this.pushObject({
            city: 'Kitzsteinhorn Kaprun',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Kitzsteinhorn', 'Kaprun'],
            speechstart: 'Im Skigebiet',
            speechskirresort: 'Kitzsteinhorn - Kaprun'
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
        // Mölltaler Gletscher
        this.pushObject({
            city: 'Mölltaler Gletscher',
            host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
            search: ['Mölltaler', 'Gletscher'],
            speechstart: 'Auf dem'
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
            speechskirresort: 'Pitztaler Gletscher'
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
Fügen - Spieljoch
Füssener Jöchle - Grän
Gaaler Lifte
Gaberl - Stubalpe
Gaissau Hintersee
Galsterbergalm
Galtür - Silvretta
Gargellen
Gemeindealpe - Mitterbach
Gerlitzen
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
Hochoetz
Hochzeiger
Hochzillertal
Hohentauern
Hopfgarten im Brixental - SkiWelt
Imst
Innerkrems
Innsbrucker Nordkettenbahnen
Ischgl
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
Kreischberg
Kristberg Silbertal
Kühtai
Lachtal
Lackenhof - Ötscher
Landeck - Zams - Fliess - Venet
Laterns - Gapfohl
Lermoos Grubigstein
Lienzer Bergbahnen - Zettersfeld - Hochstein
Loser Bergbahnen Altaussee
Maiskogel - Kaprun
Mariazeller Bürgeralpe
Mayrhofen
Modriach-Winkel Hoislifte
Mönichkirchen - Mariensee
Muttereralm
Nassfeld Hermagor
Nauders
Nesselwängle
Niederalpl
Obergurgl - Hochgurgl
Obertauern
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
Scheffau - SkiWelt
Schilifte Kirchschlag
Schladming Dachstein - Stoderzinken
Schlepplifte Neuleutasch
Schwarzenberg - Bödele
Seefeld - Gschwandtkopf
Seefeld - Rosshütte
Serfaus Fiss Ladis
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
Sölden
Söll - SkiWelt
Sonnberglifte Wald am Schoberpass
Sonnenkopf
St. Anton am Arlberg
Steinberg am Rofan
Steinplatte Waidring
Sternstein Lifte
St. Jakob im Defereggental
St. Johann im Pongau - Alpendorf
St. Johann i.T. - Kirchdorf
St. Johann i.T. - Oberndorf
Stubaital - Schlick 2000
Stuben am Arlberg
Stuhleck - Semmering
Tannheim - Neunerköpfle
Tauplitzalm
Teichalmlifte
Topskiregion Katschberg
Turracher Höhe
Unterberg - Pernitz
Veitsch Brunnalm
Vent
Wagrain
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
Zauchensee
Zell am Ziller - Zillertal Arena
Zillertal Arena
Zillertal Gletscherwelt 3000 - Tux - Finkenberg
*/
