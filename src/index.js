'use strict';

const Alexa = require('alexa-sdk');
const AWS = require('aws-sdk');
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

//=========================================================================================================================================
// SKIINFO
//=========================================================================================================================================

const skiinfoContainer = new SkiinfoContainer();

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
    console.log(' -- t7 -- execute DEV');
    alexa.execute();
};

function getMatchingContainer(snowdata) {

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

    const bergfexParser = new BergfexStrgParser(bergfexContainer);
    bergfexParser.getHtmlPage(city, (html) => {

        let snowdataBergfex;
        if (html) {
            snowdataBergfex = bergfexParser.parseHtml(html, city);
        }
        if (snowdataBergfex && !snowdataBergfex.isOutdated()) {
            console.log(' -- t7 -- snowdata and tell: ', snowdataBergfex);
            hanldeSchneeInfo(intentHandler, city, snowdataBergfex);
        } else {
            const skiinfoParser = new SkiinfoStrgParser(skiinfoContainer);
            skiinfoParser.getHtmlPage(city, (html) => {
                let snowdataSkiinfo;
                if (html) {
                    snowdataSkiinfo = skiinfoParser.parseHtml(html, city);
                }
                if ( !snowdataSkiinfo && snowdataBergfex ) {
                    console.log(' -- t7 -- snowdata and tell: ', snowdataSkiinfo);
                    hanldeSchneeInfo(intentHandler, city, snowdataBergfex);                    
                } else {
                    console.log(' -- t7 -- snowdata and tell: ', snowdataSkiinfo);
                    hanldeSchneeInfo(intentHandler, city, snowdataSkiinfo);                    
                }
            });
        }
    });

}
