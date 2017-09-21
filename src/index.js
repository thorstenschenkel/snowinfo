'use strict';

const Alexa = require('alexa-sdk');
const BergfexContainer = require('./BergfexContainer');
const SkiinfoContainer = require('./SkiinfoContainer');
const BergfexStrgParser = require('./BergfexStrgParser');
const SkiinfoStrgParser = require('./SkiinfoStrgParser');
const CardUtils = require('./CardUtils');
const SpeechOut = require('./SpeechOut');

const APP_ID = 'amzn1.ask.skill.9cc69071-8944-465e-81be-afa8bab71d2f';

const ERROR_NO_CITY = 'Es wurde keine Ort oder ein unbekannter Ort angegeben!';
const ERROR_UNKNOW_CITY = 'Den Ort kenne ich nicht!';
const HELP_MESSAGE = 'Du kannst mir ein Schigebiet nennen und ich sage dir die Schneehöhen, sofern diese vorliegen. Beispiel: Alexa frage Schneeinfo wie viel Schnee liegt in Ischgl';

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

//=========================================================================================================================================
//
//=========================================================================================================================================

const parsers = [bergfexStrgParser,skiinfoStrgParser];

let myHandler;

const handlers = {
    // ?
    'LaunchRequest': function () {
        console.log(' -- t7 -- DBG -- LaunchRequest ');
        this.emit('SchneeInfoIntent');
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
            this.emit(':tell', this.t(ERROR_NO_CITY));
        } else {
            if (!(bergfexContainer.getResort(city)) && !(skiinfoContainer.getResort(city))) {
                this.emit(':tell', this.t(ERROR_UNKNOW_CITY));
            } else {
                getSnowDataAndTell(this, city);
            }
        }
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

    if ( !snowdata ) return;

    if (snowdata.resource === bergfexContainer.resource) {
        return bergfexContainer;
    } else if (snowdata.resource === skiinfoContainer.resource) {
        return skiinfoContainer;
    }

}

function hanldeSchneeInfo(intentHandler, city, snowdata) {

    let container = getMatchingContainer(snowdata);

    let speechOut = new SpeechOut(city, snowdata, container);
    speechOut.addSpeak(intentHandler);

    let cardUtils = new CardUtils(city, snowdata);
    cardUtils.addCardRenderer(intentHandler);

    intentHandler.emit(':responseReady');

}

function getSnowDataAndTell(intentHandler, city) {

    const parser0 = parsers[0];
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
            parser1.getHtmlPage(city, (html1) => {
                let snowdata1;
                if (html1) {
                    snowdata1 = parser1.parseHtml(html1, city);
                }
                if ( !snowdata1 && snowdata0 ) {
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
