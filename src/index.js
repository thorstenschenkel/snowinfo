'use strict';

const Alexa = require('alexa-sdk');
const AWS = require('aws-sdk');
const http = require('http');
const BergfexContainer = require('./BergfexContainer');


const APP_ID = 'amzn1.ask.skill.9cc69071-8944-465e-81be-afa8bab71d2f';

const APP_NAME = 'Schneeinfo';
const STOP_MESSAGE = 'Auf Wiedersehen!';
const HELP_MESSAGE = 'Du kannst mir ein Schigebiet nennen und ich sage dir die Schneehöhen, sofern diese vorliegen.';
const ERROR_NO_CITY = 'Es wurde keine Ort oder ein unbekannter Ort angegeben!';
const ERROR_UNKNOW_CITY = 'Den Ort kenne ich nicht!';
const ERROR_NO_INFO = 'Für den Ort {city} kann ich keine Informationen liefern!';
const ERROR_OUTDATED = 'Für den Ort {city} kann ich keine akutellen Informationen liefern!';

const DAYS = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

const DB_FLAG = false;

//=========================================================================================================================================
// DynamoDB
//=========================================================================================================================================

/*
const DB_TABLE = 'snowdataTable';

var storage = {};
storage.docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

storage.getResortKey = function (snowdata) {
    if (snowdata && snowdata.resource === bergfexData.resource) {
        let search = bergfexData.getSearch(snowdata.city);
        if (search) {
            return search.toString();
        }
    }
};

storage.save = function (snowdata) {
    let skiresortKey = storage.getResortKey(snowdata);
    if (!skiresortKey) {
        console.log(' -- t7 -- save no search for: ', snowdata);
        return;
    }
    console.log(' -- t7 -- save skiresortKey: ' + skiresortKey);
    var params = {
        TableName: DB_TABLE,
        Item: {
            id: '1', // TODO
            skiresort: skiresortKey,
            resource: snowdata.resource,
            lowerSnowDepth: snowdata.lowerSnowDepth,
            upperSnowDepth: snowdata.upperSnowDepth
        }
    };
    console.log(' -- t7 -- save params: ', params);
    try {
        console.log(' -- t7 -- save try1');
        var response = storage.docClient.put(params, function (err, data) {
            if (err) {
                console.log(' -- t7 -- can not save: ', snowdata);
                console.log(' -- t7 -- err: ', err);
            } else {
                console.log(' -- t7 -- saved: ', snowdata);
                console.log(' -- t7 -- data: ', data);
            }
        });
        console.log(' -- t7 -- save response: ', response);
    } catch (error) {
        console.log(' -- t7 -- can not save: ', snowdata);
        console.log(' -- t7 -- error: ', error);
    }
    console.log(' -- t7 -- save END');
};
*/

//=========================================================================================================================================
// COMMON DATA
//=========================================================================================================================================

var commonData = {};

commonData.getResort = function (city, data) {
    if (!city) return;
    for (let resort of data.resortsMap) {
        if (resort.city.toLowerCase() === city.toLowerCase()) {
            return resort;
        }
    }
    return;
};

commonData.getHost = function (city, data) {
    if (!city) return;
    let resort = data.getResort(city);
    if (resort) {
        return resort.host;
    }
    return;
};

commonData.getPath = function (city, data) {
    if (!city) return;
    let resort = data.getResort(city);
    if (resort) {
        return resort.path;
    }
    return;
};

commonData.getSearch = function (city, data) {
    if (!city) return;
    let resort = data.getResort(city);
    if (resort) {
        return resort.search;
    }
    return;
};

commonData.getSpeechstart = function (city, data) {
    if (!city) return;
    let resort = data.getResort(city);
    if (resort && resort.speechstart) {
        return resort.speechstart;
    }
    return;
};

commonData.getSpeechskirresort = function (city, data) {
    if (!city) return;
    let resort = data.getResort(city);
    if (resort && resort.speechskirresort) {
        return resort.speechskirresort;
    }
    return;
};

//=========================================================================================================================================
// BERGFEX
//=========================================================================================================================================

const bergfexContainer = new BergfexContainer();

//=========================================================================================================================================
// SKIINFO
//=========================================================================================================================================

var skiinfoData = {};
skiinfoData.resource = 'skiinfo';

skiinfoData.getResort = function (city) {
    return commonData.getResort(city, skiinfoData);
};

skiinfoData.getHost = function (city) {
    return commonData.getHost(city, skiinfoData);
};

skiinfoData.getPath = function (city) {
    return commonData.getPath(city, skiinfoData);
};

skiinfoData.getSearch = function (city) {
    return commonData.getSearch(city, skiinfoData);
};

skiinfoData.getSpeechstart = function (city) {
    return commonData.getSpeechstart(city, skiinfoData);
};

skiinfoData.getSpeechskirresort = function (city) {
    return commonData.getSpeechskirresort(city, skiinfoData);
};

// http://www.schneeradar.de/osterreich/tirol/ -> ok
// http://www.skiinfo.de/oesterreich/schneehoehen-schneebericht.html

skiinfoData.resortsMap = [
    // Hintertuxer Gletscher
    {
        city: 'Hintertux',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Hintertuxer', 'Gletscher'],
        speechstart: 'In'
    },
    {
        city: 'Hintertuxer Gletscher',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Hintertuxer', 'Gletscher'],
        speechstart: 'Auf dem'
    },
    // Kaunertaler Gletscher
    {
        city: 'Kaunertal',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Kaunertaler', 'Gletscher'],
        speechstart: 'Im'
    },
    {
        city: 'Kaunertaler Gletscher',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Kaunertaler', 'Gletscher'],
        speechstart: 'Auf dem'
    },
    // Kitzsteinhorn - Kaprun
    {
        city: 'Kaprun',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Kitzsteinhorn', 'Kaprun'],
        speechstart: 'Im Skigebiet',
        speechskirresort: 'Kitzsteinhorn - Kaprun'
    },
    {
        city: 'Kaprun Kitzsteinhorn',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Kitzsteinhorn', 'Kaprun'],
        speechstart: 'Im Skigebiet',
        speechskirresort: 'Kitzsteinhorn - Kaprun'
    },
    {
        city: 'Kitzsteinhorn',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Kitzsteinhorn', 'Kaprun'],
        speechstart: 'Im Skigebiet',
        speechskirresort: 'Kitzsteinhorn - Kaprun'
    },
    {
        city: 'Kitzsteinhorn Kaprun',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Kitzsteinhorn', 'Kaprun'],
        speechstart: 'Im Skigebiet',
        speechskirresort: 'Kitzsteinhorn - Kaprun'
    },
    // Pitztaler Gletscher
    {
        city: 'Pitztaler Gletscher',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Pitztaler', 'Gletscher'],
        speechstart: 'Auf dem',
        speechskirresort: 'Pitztaler Gletscher'
    },
    {
        city: 'Pitztal',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Pitztaler', 'Gletscher'],
        speechstart: 'Auf dem'
    },
    // Mölltaler Gletscher
    {
        city: 'Mölltaler Gletscher',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Mölltaler', 'Gletscher'],
        speechstart: 'Auf dem'
    },
    // Sölden
    {
        city: 'Sölden',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Sölden'],
        speechstart: 'In'
    },
    // Stubaier Gletscher
    {
        city: 'Stubaital',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Stubaier', 'Gletscher'],
        speechstart: 'Im'
    },
    {
        city: 'Stubaier Gletscher',
        host: 'www.skiinfo.de', path: '/oesterreich/schneehoehen-schneebericht.html',
        search: ['Stubaier', 'Gletscher'],
        speechstart: 'Auf dem'
    },
];

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
Bad Kleinkirchheim
Bergeralm - Steinach am Brenner
Biberwier - Marienberg
Bichlbach - Berwang
Bodental
Brandnertal
Brixen im Thale - SkiWelt
Buchensteinwand
Dachstein Gletscher
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
Hochkönig
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
Kitzbühel
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
Lech Zürs am Arlberg
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
Schladming - Planai - Hochwurzen
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
Zell am See - Schmittenhöhe
Zell am Ziller - Zillertal Arena
Zillertal Arena
Zillertal Gletscherwelt 3000 - Tux - Finkenberg
*/
//=========================================================================================================================================
//
//=========================================================================================================================================

let myHandler;

const handlers = {
    // ?
    'LaunchRequest': function () {
        console.log(' -- t7 -- LaunchRequest ');
        this.emit('SchneeInfoIntent');
    },
    'SchneeInfoIntent': function () {
        myHandler = this;
        let intent = this.event.request.intent;
        console.log(' -- t7 -- SchneeInfoIntent ', this.event);
        let city;
        if (intent && intent.slots && intent.slots.city) {
            city = this.event.request.intent.slots.city.value;
        }
        console.log('city : ' + city);
        if (!city) {
            this.emit(':tell', this.t('ERROR_NO_CITY'));
        } else {
            getSnowDataAndTell(this, city);
        }
    },
    // ?
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    // ?
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    // ?
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function () {
        this.emit(':ask', this.t('HELP_MESSAGE'), this.t('HELP_MESSAGE'));
    }
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    // if ( DB_FLAG ) {
    // alexa.dynamoDBTableName = DB_TABLE;
    // }
    console.log(' -- t7 -- execute DEV');
    alexa.execute();
};

function isOutdated(snowdata) {
    let outdated = new Date();
    outdated.setDate(outdated.getDate() - 8);
    console.warn(' -- t7 -- outdated ', outdated);
    console.warn(' -- t7 -- snowdata.reportDate: ', snowdata.reportDate);
    return (!snowdata.reportDate || (outdated.getTime() > snowdata.reportDate.getTime()));
}

function hanldeSchneeInfo(intentHandler, city, snowdata) {

    let speechOutput;
    if (!snowdata) {
        speechOutput = ERROR_NO_INFO.replace('{city}', city);
    } else {
        if (isOutdated(snowdata)) {
            speechOutput = ERROR_OUTDATED.replace('{city}', city);
        } else {
            let speechstart;
            if (snowdata.resource === bergfexContainer.resource) {
                speechstart = bergfexContainer.getSpeechstart(city);
            } else if (snowdata.resource === skiinfoData.resource) {
                speechstart = skiinfoData.getSpeechstart(city);
            }
            if (speechstart) {
                speechOutput = speechstart + ' ';
            } else {
                console.warn(' -- t7 -- no speechstart for city: ' + city);
                speechOutput = 'In ';
            }
            let speechskiresortt;
            if (snowdata.resource === bergfexContainer.resource) {
                speechskiresortt = bergfexContainer.getSpeechskirresort(city);
            } else if (snowdata.resource === skiinfoData.resource) {
                speechskiresortt = skiinfoData.getSpeechskirresort(city);
            }
            if (speechskiresortt) {
                speechOutput += speechskiresortt;
            } else {
                speechOutput += city;
            }
            if (snowdata.lowerSnowDepth === 0 && snowdata.upperSnowDepth === 0) {
                speechOutput += ' liegt kein Schnee.';
            } else {
                speechOutput += ' liegen ' + snowdata.lowerSnowDepth + ' Zentimeter Schnee im Tal';
                speechOutput += ' und ' + snowdata.upperSnowDepth + ' Zentimeter auf dem Berg.';
            }
            let speechDate = getSpeechDate(snowdata.reportDate);
            if (speechDate) {
                speechOutput += ' Die Informationen stammen ';
                if (speechDate === 'heute' || speechDate === 'gestern') {
                    speechOutput += 'von ';
                } else {
                    speechOutput += 'vom ';
                }
                speechOutput += speechDate + '.';
            }
        }
    }
    console.log(' -- t7 -- speechOutput: ' + speechOutput);
    let cardTitle = getCardTitle(city);
    let cardContent = getCardContent(snowdata, city);
    if (cardTitle && cardContent) {
        intentHandler.response.cardRenderer(cardTitle, cardContent);
    }
    intentHandler.response.speak(speechOutput);
    intentHandler.emit(':responseReady');
    // intentHandler.emit(':tell', speechOutput);

}

function getCardTitle(city) {
    // TODO Groß-/Kleinschreibung für snowdata.skiresort
    return 'Schneehöhen ' + city;
}

function getCardContent(snowdata, city) {

    let content;
    if (!snowdata) {
        // TODO Groß-/Kleinschreibung für city
        content = 'Für den Ort {city} können keine Informationen geliefert werden!';
        content = content.replace('{city}', city);
    } else {
        if (isOutdated(snowdata)) {
            // TODO Groß-/Kleinschreibung für snowdata.skiresort
            content = 'Für den Ort {city} können keine akutellen Informationen geliefert werden!';
            content = content.replace('{city}', city);
        } else {
            content = 'Schneehöhe Tal: ' + snowdata.lowerSnowDepth + ' cm';
            content += '\n';
            content += 'Schneehöhe Berg: ' + snowdata.upperSnowDepth + ' cm';
            // Status Skigebiet: GEÖFFNET / GESCHLOSSEN
            // Lifte/Bahnen: 11 von 20 offen
            content += '\n';
            content += '\n';
            let date = snowdata.reportDate;
            if (date && (date instanceof Date)) {
                let wd = date.getDay();
                wd = DAYS[wd];
                let dd = date.getDate();
                let mm = date.getMonth() + 1;
                let yyyy = date.getFullYear();
                let dateStrg = wd + ', ' + dd + '.' + mm + '.' + yyyy;
                content += 'Letztes Update: ' + dateStrg;
            }
        }
    }
    return content;
}


function getSpeechDate(date) {
    if (!date || !(date instanceof Date)) {
        return;
    }
    let dateStrg = date.toISOString().substring(0, 10);
    let today = new Date();
    let todayStrg = today.toISOString().substring(0, 10);
    if (dateStrg === todayStrg) {
        return 'heute';
    }
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let yesterdayStrg = yesterday.toISOString().substring(0, 10);
    if (dateStrg === yesterdayStrg) {
        return 'gestern';
    }
    let retStrg = '<say-as interpret-as="date" format="ymd">';
    retStrg += date.toISOString().substring(0, 10);
    retStrg += '</say-as>';
    return retStrg;
}

function getSnowDataAndTell(intentHandler, city) {

    getBergfexHtml(city, (html) => {
        let snowdataBergfex;
        if (html) {
            snowdataBergfex = parseBergfexHtml(html, city);
        }
        if (snowdataBergfex && !isOutdated(snowdataBergfex)) {
            console.log(' -- t7 -- snowdata and tell: ', snowdataBergfex);
            hanldeSchneeInfo(intentHandler, city, snowdataBergfex);
        } else {
            getSkiinfoHtml(city, (html) => {
                let snowdataSkiinfo;
                if (html) {
                    snowdataSkiinfo = parseSkiinfoHtml(html, city);
                }
                console.log(' -- t7 -- snowdata and tell: ', snowdataSkiinfo);
                let snowdata = snowdataSkiinfo;
                // TODO isOutdated      snowdataSkiinfo oder snowdataBergfex
                hanldeSchneeInfo(intentHandler, city, snowdata);
            });
        }
    });
}

function getHtmlPage(host, path, callback) {

    var i = 0;

    return http.get({
        host: host,
        path: path
    }, function (response) {
        var body = '';
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {
            callback(body);
        });
    }).on('error', function (e) {
        console.warn(' -- t7 -- Can not get HTML page: ' + e.message);
        callback();
    });

}

function getBergfexHtml(city, callback) {

    if (!bergfexContainer.getResort(city)) {
        callback();
        return;
    }

    let host = bergfexContainer.getHost(city);
    console.log(' -- t7 -- bergfex host: ', host);
    let path = bergfexContainer.getPath(city);
    console.log(' -- t7 -- bergfex path: ', path);
    getHtmlPage(host, path, callback);

}

function getSkiinfoHtml(city, callback) {

    if (!skiinfoData.getResort(city)) {
        callback();
        return;
    }

    let host = skiinfoData.getHost(city);
    console.log(' -- t7 -- skiinfoData host: ', host);
    let path = skiinfoData.getPath(city);
    console.log(' -- t7 -- skiinfoData path: ', path);
    getHtmlPage(host, path, callback);

}

function parseBergfexHtml(htmlString, city) {
    if (!htmlString) {
        return;
    }
    let retData;
    let searchArray = bergfexContainer.getSearch(city);
    var tabStrings = getTablesHtmlContent(htmlString);
    for (let tabStrg of tabStrings) {
        if (!tabStrg) continue;
        if (tabStrg.indexOf('skigebiet') != -1 && tabStrg.indexOf('berg') != -1) {
            // console.log(' -- t7 -- tabStrg: ' + tabStrg);
            var trStrings = getRowHtmlContent(tabStrg);
            for (let trString of trStrings) {
                if (!trString) continue;
                // console.log(' -- t7 -- trString: ' + trString);
                let snowdata = getBergfexSnowData(trString);
                snowdata.city = city; // TODO
                // console.log(' -- t7 -- snowdata: ', snowdata);
                // store in DB
                if (DB_FLAG) storage.save(snowdata);
                if (searchCompare(searchArray, snowdata)) {
                    retData = snowdata;
                    console.log(' -- t7 -- retData: ', retData);
                }
            }
        }
    }
    return retData;
}

function parseSkiinfoHtml(htmlString, city) {
    if (!htmlString) {
        return;
    }
    let retData;
    let searchArray = skiinfoData.getSearch(city);
    var tabStrings = getTablesHtmlContent(htmlString);
    for (let tabStrg of tabStrings) {
        if (!tabStrg) continue;
        if (tabStrg.indexOf('skigebiet') != -1 && tabStrg.indexOf('schneehöhe') != -1) {
            // console.log(' -- t7 -- tabStrg: ' + tabStrg);
            var trStrings = getRowHtmlContent(tabStrg);
            for (let trString of trStrings) {
                if (!trString) continue;
                // console.log(' -- t7 -- trString: ' + trString);
                let snowdata = getSkiinfoSnowData(trString);
                // console.log(' -- t7 -- snowdata: ', snowdata);
                // store in DB
                // if ( DB_FLAG ) myHandler.attributes[city] = snowdata;
                if (searchCompare(searchArray, snowdata)) {
                    retData = snowdata;
                    console.log(' -- t7 -- retData: ', retData);
                }
            }
        }
    }
    return retData;
}

function searchCompare(searchArray, snowdata) {
    console.log(' -- t7 -- searchCompare: ', searchArray);
    console.log(' -- t7 -- searchCompare: ', snowdata);
    if (!searchArray || !snowdata || !snowdata.skiresort) {
        return false;
    }
    let resort = snowdata.skiresort.toLowerCase();
    for (let key in searchArray) {
        let search = searchArray[key].toLowerCase();
        if (resort.indexOf(search) === -1) {
            console.log(' -- t7 -- search: ' + search);
            return false;
        }
    }
    return true;
}

function getOnlyInt(strg) {
    let num = strg.replace(/[^0-9]/g, '');
    // console.log(' -- t7 -- num: ' + num);
    if (num && num.indexOf('0') === 0) {
        num = num.substring(1);
    }
    if (isNaN(num) || num.length === 0) {
        return 0;
    }
    return parseInt(num);
}

function getBergfexSnowData(htmlString) {
    let snowdata = {};
    snowdata.resource = bergfexContainer.resource;
    snowdata.lastUpdate = Date.now();
    snowdata.lowerSnowDepth = 0;
    snowdata.upperSnowDepth = 0;
    let tdStrings = getPartContent(htmlString, '<td', '</td>');
    let i = 0;
    for (let tdStrg of tdStrings) {
        let strg = tdStrg.trim();
        // console.log(' -- t7 -- strg: ' + strg);
        strg = getPureText(strg);
        // console.log(' -- t7 -- pure strg: ' + strg);
        switch (i) {
            case 0: // skigebiet
                if (strg) {
                    snowdata.skiresort = strg.trim();
                } else {
                    snowdata.skiresort = '';
                }
                break;
            case 1: // tal
                snowdata.lowerSnowDepth = getOnlyInt(strg);
                break;
            case 2: // berg
                snowdata.upperSnowDepth = getOnlyInt(strg);
                break;
            case 3: // neu
                break;
            case 4: // lifte
                break;
            case 5: // status
                break;
            case 6: // datum
                snowdata.reportDate = getDate(strg);
                break;
        }
        i++;
    }
    return snowdata;
}

function getSkiinfoSnowData(htmlString) {
    let snowdata = {};
    snowdata.resource = skiinfoData.resource;
    snowdata.lastUpdate = Date.now();
    snowdata.lowerSnowDepth = 0;
    snowdata.upperSnowDepth = 0;
    let tdStrings = getPartContent(htmlString, '<td', '</td>');
    let i = 0;
    for (let tdStrg of tdStrings) {
        let strg = tdStrg.trim();
        // console.log(' -- t7 -- strg: ' + strg);
        switch (i) {
            case 0: // skigebiet + datum 
                let substrings0 = strg.split('/div>');
                // console.log(' -- t7 -- substrings0: ', substrings0);
                if (substrings0 && substrings0.length >= 3) {
                    // skigebiet
                    let skiresort = substrings0[0];
                    skiresort = skiresort.replace('<div class="name">', '');
                    skiresort = getPureText(skiresort);
                    if (skiresort) {
                        snowdata.skiresort = skiresort.trim();
                    } else {
                        snowdata.skiresort = '';
                    }
                    // region
                    // let regionStrg = substrings0[1];
                    // datum
                    let dateStrg = substrings0[2];
                    snowdata.reportDate = getSkiinfoDate(dateStrg);
                }
                break;
            case 1: // status
                break;
            case 2: // neuschnee
                break;
            case 3: // tal + berg
                strg = getPureText(strg);
                strg = strg.replace(/cm/gi, '');
                let substrings3 = strg.split('-');
                if (substrings3 && substrings3.length === 2) {
                    snowdata.lowerSnowDepth = getOnlyInt(substrings3[0]);
                    snowdata.upperSnowDepth = getOnlyInt(substrings3[1]);
                }
                break;
            case 4: // lifte
                break;
            case 5: // pisten
                break;
            case 6: // wetter
                break;
        }
        i++;
    }
    return snowdata;
}

function getPureText(htmlString) {
    let tag = getFirstTag(htmlString);
    if (tag) {
        // console.log(' -- t7 -- first tag: ' + tag);
        return removeTag(htmlString, tag);
    } else {
        return htmlString;
    }
}

function removeTag(htmlString, tag) {
    let strg = htmlString;
    strg = strg.replace(tag, '');
    let end = strg.indexOf('<');
    if (end != -1) {
        strg = strg.substring(0, end);
    }
    return strg.trim();
}

function getFirstTag(htmlString) {
    let start = htmlString.indexOf('<');
    let end = htmlString.indexOf('>');
    if (start === 0 && end > 0) {
        end++;
        return htmlString.substring(start, end);
    }
    return;
}

function getTablesHtmlContent(htmlString) {
    return getPartContent(htmlString, '<table', '</table>');
}

function getRowHtmlContent(htmlString) {
    return getPartContent(htmlString, '<tr', '</tr>');
}

function getPartContent(htmlString, startTag, endTag) {

    let splitStrings = htmlString.split(startTag);
    if (splitStrings && splitStrings.length > 0) {
        let retStrings = [];
        for (let strg of splitStrings) {
            strg = strg.toLowerCase();
            let start = strg.indexOf('>');
            let end = strg.indexOf(endTag);
            if (start !== -1 || end > start) {
                start++;
                strg = strg.substring(start, end);
                retStrings.push(strg);
            }
        }
        return retStrings;
    }
    return;

}

function getSkiinfoDate(htmlString) {

    if (!htmlString) {
        return;
    }

    let dateStrg = getPureText(htmlString);
    let datestrings = dateStrg.split('/');
    if (datestrings && datestrings.length >= 2) {
        let dd = getOnlyInt(datestrings[0]);
        let mm = getOnlyInt(datestrings[1]);
        if (dd && dd > 0 && mm && mm > 0) {
            dateStrg = '';
            if (dd < 10) dateStrg += '0';
            dateStrg += dd.toString();
            if (mm < 10) dateStrg += '0';
            dateStrg += mm.toString();
            let date = new Date();
            dateStrg += date.getFullYear();
            if (dateStrg.length === 8) {
                dateStrg = dateStrg.slice(4, 8) + '-' + dateStrg.slice(2, 4) + '-' + dateStrg.slice(0, 2);
                return new Date(dateStrg);
            }
        }
    }

    console.log(' -- t7 -- unexpected date string: ' + htmlString);

}

function getDate(htmlString) {

    if (!htmlString) {
        return;
    }
    if (htmlString.indexOf('heute') != -1) {
        let date = new Date();
        return date;
    }
    if (htmlString.indexOf('gestern') != -1) {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        return date;
    }

    let num = getOnlyInt(htmlString);
    if (num && num > 0) {
        let dateStrg = num.toString();
        if (dateStrg.length === 3) {
            dateStrg = '0' + dateStrg;
        }
        if (dateStrg.length === 4) {
            let date = new Date();
            dateStrg += date.getFullYear();
        }
        if (dateStrg.length === 8) {
            dateStrg = dateStrg.slice(4, 8) + '-' + dateStrg.slice(2, 4) + '-' + dateStrg.slice(0, 2);
            return new Date(dateStrg);
        }
    }

    console.log(' -- t7 -- unexpected date string: ' + htmlString);

}
