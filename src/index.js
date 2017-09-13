'use strict';

const Alexa = require('alexa-sdk');
const AWS = require('aws-sdk');
const BergfexContainer = require('./BergfexContainer');
const SkiinfoContainer = require('./SkiinfoContainer');
const BergfexStrgParser = require('./BergfexStrgParser');
const SkiinfoStrgParser = require('./SkiinfoStrgParser');
const CardUtils = require('./CardUtils');

const APP_ID = 'amzn1.ask.skill.9cc69071-8944-465e-81be-afa8bab71d2f';

const APP_NAME = 'Schneeinfo';
const STOP_MESSAGE = 'Auf Wiedersehen!';
const HELP_MESSAGE = 'Du kannst mir ein Schigebiet nennen und ich sage dir die Schneehöhen, sofern diese vorliegen.';
const ERROR_NO_CITY = 'Es wurde keine Ort oder ein unbekannter Ort angegeben!';
const ERROR_UNKNOW_CITY = 'Den Ort kenne ich nicht!';
const ERROR_NO_INFO = 'Für den Ort {city} kann ich keine Informationen liefern!';
const ERROR_OUTDATED = 'Für den Ort {city} kann ich keine akutellen Informationen liefern!';

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
            if ( !(bergfexContainer.getResort(city)) && !(skiinfoContainer.getResort(city)) ) {
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
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    console.log(' -- t7 -- execute DEV');
    alexa.execute();
};

function hanldeSchneeInfo(intentHandler, city, snowdata) {

    let speechOutput;
    if (!snowdata) {
        speechOutput = ERROR_NO_INFO.replace('{city}', city);
    } else {
        if (snowdata.isOutdated()) {
            speechOutput = ERROR_OUTDATED.replace('{city}', city);
        } else {
            let speechstart;
            if (snowdata.resource === bergfexContainer.resource) {
                speechstart = bergfexContainer.getSpeechstart(city);
            } else if (snowdata.resource === skiinfoContainer.resource) {
                speechstart = skiinfoContainer.getSpeechstart(city);
            }
            if (speechstart) {
                speechOutput = speechstart + ' ';
            } else {
                console.warn(' -- t7 -- no speechstart for city: ' + city);
                speechOutput = 'In ';
            }
            let speechskiresort;
            if (snowdata.resource === bergfexContainer.resource) {
                speechskiresort = bergfexContainer.getSpeechskirresort(city);
            } else if (snowdata.resource === skiinfoContainer.resource) {
                speechskiresort = skiinfoContainer.getSpeechskirresort(city);
            }
            if (speechskiresort) {
                speechOutput += speechskiresort;
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
    let cardUtils = new CardUtils(city,snowdata);
    cardUtils.addCardRenderer(intentHandler);
    intentHandler.response.speak(speechOutput);
    intentHandler.emit(':responseReady');

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
                console.log(' -- t7 -- snowdata and tell: ', snowdataSkiinfo);
                // TODO isOutdated      snowdataSkiinfo oder snowdataBergfex
                hanldeSchneeInfo(intentHandler, city, snowdataSkiinfo);
            });
        }
    });
}
