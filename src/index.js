'use strict';

const Alexa = require('alexa-sdk');

const BergfexContainer = require('./BergfexContainer');
const SkiinfoContainer = require('./SkiinfoContainer');
const BergfexStrgParser = require('./BergfexStrgParser');
const SkiinfoStrgParser = require('./SkiinfoStrgParser');
const CardUtils = require('./CardUtils');
const SpeechOut = require('./SpeechOut');
const DbHelper = require('./DbHelper');

// const APP_ID = 'amzn1.ask.skill.b742793c-261f-4f56-a983-ba3c41b3f4c5'; // Schneeinfo
const APP_ID = 'amzn1.ask.skill.9cc69071-8944-465e-81be-afa8bab71d2f'; // Schneeinfo DEV

const ERROR_NO_CITY = 'Es wurde kein Ort oder ein unbekannter Ort angegeben!';
const ERROR_UNKNOW_CITY = 'Den Ort kenne ich nicht!';
const ERROR_TEMP = 'Leider kann ich für diesen Ort derzeit keine Informationen liefern!';
const HELP_MESSAGE = 'Du kannst mir einen Ort oder ein Schigebiet nennen und ich sage dir die Schneehöhen, sofern diese vorliegen. Beispiel: Alexa frage Schneeinfo wie viel Schnee liegt in Ischgl';
const LAUNCH_MESSAGE = 'Servus, für welchen Ort solle ich dir die Schneehöhen liefern?';
const REPROMPT_MESSAGE = 'Hallo, du musst mir einen Ort oder ein Schigebiet nennen!';
const MORE_INFOS = 'Nächster Ort oder sage Stopp.';
const STOP_MESSAGE = 'Auf Wiederschauen!';

function getVersion()  {
    return require('./config.json').version;
}

//=========================================================================================================================================
// BERGFEX
//=========================================================================================================================================

const bergfexContainer = new BergfexContainer();
const bergfexStrgParser = new BergfexStrgParser(bergfexContainer);

//=========================================================================================================================================
// SKIINFO
//=========================================================================================================================================

const skiinfoContainer = new SkiinfoContainer();
const skiinfoStrgParser = new SkiinfoStrgParser(skiinfoContainer);

const parsers = [bergfexStrgParser, skiinfoStrgParser];

//=========================================================================================================================================
// DB
//=========================================================================================================================================

const DB_PWD = process.env.DB_PWD;
const DB_URI = 'mongodb://snowinfo:' + DB_PWD + '@cluster0-shard-00-00-bavvq.mongodb.net:27017,cluster0-shard-00-01-bavvq.mongodb.net:27017,cluster0-shard-00-02-bavvq.mongodb.net:27017/snowinfo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

const dbHelper = new DbHelper(parsers, DB_URI);

//=========================================================================================================================================
// 
//=========================================================================================================================================

const handlers = {
    // ?
    'LaunchRequest': function () {
        console.log(' -- t7 -- DBG -- LaunchRequest ');
        this.response.speak(LAUNCH_MESSAGE).listen(REPROMPT_MESSAGE);
        this.emit(':responseReady');
    },
    'SchneeCityIntent': function () {
        console.log(' -- t7 -- DBG -- SchneeCityIntent ', this.event);
        handleSnowIntent(this, this.event.request.intent, true);
    },
    'SchneeInfoIntent': function () {
        console.log(' -- t7 -- DBG -- SchneeInfoIntent ', this.event);
        handleSnowIntent(this, this.event.request.intent, false);
    },
    'AMAZON.HelpIntent': function () {
        this.response.speak(HELP_MESSAGE).listen(REPROMPT_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'Unhandled': function () {
        this.emit(':ask', this.t(HELP_MESSAGE), this.t(HELP_MESSAGE));
    }
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    console.log(' -- t7 -- INFO -- version: ' + getVersion());
    alexa.execute();
};

function handleSnowIntent(intentHandler, intent, ask) {

    let city;
    if (intent && intent.slots && intent.slots.city) {
        city = intent.slots.city.value;
    }
    console.log(' -- t7 -- DBG -- city : ' + city);
    if (!city) {
        // console.log(' -- t7 -- DBG -- no city : ' + city);
        const rb = intentHandler.response.speak(ERROR_NO_CITY);
        if (ask) {
            rb.listen(MORE_INFOS);
        }
        intentHandler.emit(':responseReady');
    } else {
        if (!(bergfexContainer.getResort(city)) && !(skiinfoContainer.getResort(city))) {
            // console.log(' -- t7 -- DBG -- unkown city : ' + city);
            const rb = intentHandler.response.speak(ERROR_UNKNOW_CITY);
            if (ask) {
                rb.listen(MORE_INFOS);
            }
            intentHandler.emit(':responseReady');
        } else {
            dbHelper.loadFromDB(city, (dbSnowData) => {
                console.log(' -- t7 -- DBG -- dbSnowData : ', dbSnowData);
                getSnowDataAndTell(intentHandler, city, dbSnowData, ask);
            });
        }
    }

}

function getMatchingContainer(snowdata) {

    if (!snowdata) return;

    if (snowdata.resource === bergfexContainer.resource) {
        return bergfexContainer;
    } else if (snowdata.resource === skiinfoContainer.resource) {
        return skiinfoContainer;
    }

}

function emit(intentHandler, city, snowdata, ask) {

    let container = getMatchingContainer(snowdata);

    let speechOut = new SpeechOut(city, snowdata, container);
    speechOut.addSpeak(intentHandler, ask);

    let cardUtils = new CardUtils(city, snowdata);
    cardUtils.addCardRenderer(intentHandler);

    intentHandler.emit(':responseReady');

}

function emitTempError(intentHandler, ask) {
    const rb = intentHandler.response.speak(ERROR_TEMP);
    if (ask) {
        rb.listen(MORE_INFOS);
    }
    intentHandler.emit(':responseReady');
}

function hanldeSchneeInfo(intentHandler, city, snowdata, ask) {

    if (!snowdata) {
        emitTempError(intentHandler, ask);
        return;
    }

    if (snowdata.dbResult === true) {
        emit(intentHandler, city, snowdata, ask);
    } else {
        dbHelper.storeAllInDB(() => {
            dbHelper.close();
            emit(intentHandler, city, snowdata, ask);
        });
    }

}

function getSnowDataAndTell(intentHandler, city, snowdata, ask) {

    if (snowdata) {
        hanldeSchneeInfo(intentHandler, city, snowdata, ask);
        return;
    }

    let promises = [];
    for (let parser of parsers) {
        parser.clear();
        const promise = parser.getHtmlPagePromise(city);
        promises.push(promise);
    }
    let parserIndex = 0;
    let resultSnowdata;
    try {
        promises[parserIndex]
            .then(htmlPage => {
                resultSnowdata = parsers[parserIndex].parseHtml(htmlPage, city);
            })
            .catch((error) => {
                console.error(' -- t7 -- ERR -- Promise error (all.then-catch): ', error);
            })
            .then(() => {
                parserIndex++;
                if ( (!resultSnowdata || resultSnowdata.isOutdated()) && parserIndex < parsers.length ) {
                    promises[parserIndex]
                        .then(htmlPage => {
                            resultSnowdata = parsers[parserIndex].parseHtml(htmlPage, city);
                            hanldeSchneeInfo(intentHandler, city, resultSnowdata, ask);
                        }).catch((error) => {
                            console.error(' -- t7 -- ERR -- Promise error (all.then-catch): ', error);
                            hanldeSchneeInfo(intentHandler, city, resultSnowdata, ask);
                        });
                } else {
                    hanldeSchneeInfo(intentHandler, city, resultSnowdata, ask);
                }
            });
    } catch (error) {
        console.error(' -- t7 -- ERR -- Promise error (try-catch): ', error);
        emitTempError(intentHandler, ask);
    }


    // let promises = [];
    // for (let parser of parsers) {
    //     parser.clear();
    //     const promise = parser.getHtmlPagePromise(city);
    //     promises.push(promise);
    // }
    // try {
    //     Promise.all(promises)
    //         .then(htmlPages => {
    //             let resultSnowdata;
    //             for (let i = 0; i < htmlPages.length; i++) {
    //                 let htmlPage = htmlPages[i];
    //                 if (htmlPage) {
    //                     const snowdata = parsers[i].parseHtml(htmlPage, city);
    //                     if (snowdata) {
    //                         if (!resultSnowdata || resultSnowdata.isOutdated()) {
    //                             resultSnowdata = snowdata;
    //                         }
    //                     }
    //                 }
    //             }
    //             hanldeSchneeInfo(intentHandler, city, resultSnowdata, ask);
    //         }).catch(error => {
    //             console.error(' -- t7 -- ERR -- Promise error (all.then-catch): ', error);
    //             const rb = intentHandler.response.speak(ERROR_TEMP);
    //             if (ask) {
    //                 rb.listen(MORE_INFOS);
    //             }
    //             intentHandler.emit(':responseReady');
    //         });
    // } catch (error) {
    //     console.error(' -- t7 -- ERR -- Promise error (try-catch): ', error);
    // }

}
