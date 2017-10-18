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
const HELP_MESSAGE = 'Du kannst mir einen Ort oder ein Schigebiet nennen und ich sage dir die Schneehöhen, sofern diese vorliegen. Beispiel: Alexa frage Schneeinfo wie viel Schnee liegt in Ischgl';
const LAUNCH_MESSAGE = 'Servus, für welchen Ort solle ich dir die Schneehöhen liefern?';
const REPROMPT_MESSAGE = 'Hallo, du musst mir einen Ort oder ein Schigebiet nennen!';
const STOP_MESSAGE = 'Auf Wiederschauen!';

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

const dbHelper = new DbHelper(parsers,DB_URI);

//=========================================================================================================================================
// 
//=========================================================================================================================================

let myHandler;

const handlers = {
    // ?
    'LaunchRequest': function () {
        console.log(' -- t7 -- DBG -- LaunchRequest ');
        this.response.speak(LAUNCH_MESSAGE).listen(REPROMPT_MESSAGE);
        this.emit(':responseReady');
    },
    'SchneeInfoIntent': function () {
        myHandler = this;
        let intent = this.event.request.intent;
        console.log(' -- t7 -- DBG -- SchneeInfoIntent ', this.event);
        let city;
        if (intent && intent.slots && intent.slots.city) {
            city = this.event.request.intent.slots.city.value;
        }
        console.log(' -- t7 -- DBG -- city : ' + city);
        if (!city) {
            // console.log(' -- t7 -- DBG -- no city : ' + city);
            this.response.speak(ERROR_NO_CITY);
            this.emit(':responseReady');
        } else {
            if (!(bergfexContainer.getResort(city)) && !(skiinfoContainer.getResort(city))) {
                // console.log(' -- t7 -- DBG -- unkown city : ' + city);
                this.response.speak(ERROR_UNKNOW_CITY);
                this.emit(':responseReady');
            } else {
                dbHelper.loadFromDB(city, (dbSnowData) => {
                    console.log(' -- t7 -- DBG -- dbSnowData : ', dbSnowData);
                    if (dbSnowData) {
                        hanldeSchneeInfo(this, city, dbSnowData);
                    } else {
                        getSnowDataAndTell(this, city);
                    }
                });
            }
        }
    },
    'AMAZON.HelpIntent': function () {
        this.response.speak(LAUNCH_MESSAGE).listen(REPROMPT_MESSAGE);
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
    console.log(' -- t7 -- DBG -- execute DEV');
    alexa.execute();
};

function getMatchingContainer(snowdata) {

    if (!snowdata) return;

    if (snowdata.resource === bergfexContainer.resource) {
        return bergfexContainer;
    } else if (snowdata.resource === skiinfoContainer.resource) {
        return skiinfoContainer;
    }

}

function emit(intentHandler, city, snowdata) {

    let container = getMatchingContainer(snowdata);

    let speechOut = new SpeechOut(city, snowdata, container);
    speechOut.addSpeak(intentHandler);

    let cardUtils = new CardUtils(city, snowdata);
    cardUtils.addCardRenderer(intentHandler);

    intentHandler.emit(':responseReady');

}

function hanldeSchneeInfo(intentHandler, city, snowdata) {

    if ( snowdata.dbResult === true ) {
        emit(intentHandler, city, snowdata);        
    } else {
        dbHelper.storeAllInDB(() => {
            dbHelper.close();
            emit(intentHandler, city, snowdata);
        });
    }

}

function getSnowDataAndTell(intentHandler, city) {

    const parser0 = parsers[0];
    parser0.clear();
    parser0.getHtmlPage(city, (html0) => {
        // console.log(' -- t7 -- DBG -- html: ', html);
        let snowdata0;
        if (html0) {
            snowdata0 = parser0.parseHtml(html0, city);
        }
        if (snowdata0 && !snowdata0.isOutdated()) {
            console.log(' -- t7 -- DBG -- snowdata and tell: ', snowdata0);
            hanldeSchneeInfo(intentHandler, city, snowdata0);
        } else {
            const parser1 = parsers[1];
            parser1.clear();
            parser1.getHtmlPage(city, (html1) => {
                let snowdata1;
                if (html1) {
                    snowdata1 = parser1.parseHtml(html1, city);
                }
                if (!snowdata1 && snowdata0) {
                    console.log(' -- t7 -- DBG -- snowdata and tell: ', snowdata1);
                    hanldeSchneeInfo(intentHandler, city, snowdata0);
                } else {
                    console.log(' -- t7 -- DBG -- snowdata and tell: ', snowdata1);
                    hanldeSchneeInfo(intentHandler, city, snowdata1);
                }
            });
        }
    });

}
