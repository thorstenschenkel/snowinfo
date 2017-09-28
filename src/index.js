'use strict';

const Alexa = require('alexa-sdk');
const MongoClient = require('mongodb').MongoClient;
const lodash = require('lodash');

const BergfexContainer = require('./BergfexContainer');
const SkiinfoContainer = require('./SkiinfoContainer');
const BergfexStrgParser = require('./BergfexStrgParser');
const SkiinfoStrgParser = require('./SkiinfoStrgParser');
const CardUtils = require('./CardUtils');
const SpeechOut = require('./SpeechOut');
const Snowdata = require('./Snowdata');

// const APP_ID = 'amzn1.ask.skill.b742793c-261f-4f56-a983-ba3c41b3f4c5'; // Schneeinfo
const APP_ID = 'amzn1.ask.skill.9cc69071-8944-465e-81be-afa8bab71d2f'; // Schneeinfo DEV

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

const parsers = [bergfexStrgParser, skiinfoStrgParser];

//=========================================================================================================================================
// DB
//=========================================================================================================================================

const DB_PWD = process.env.DB_PWD;
const DB_URI = 'mongodb://snowinfo:' + DB_PWD + '@cluster0-shard-00-00-bavvq.mongodb.net:27017,cluster0-shard-00-01-bavvq.mongodb.net:27017,cluster0-shard-00-02-bavvq.mongodb.net:27017/snowinfo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
const DB_COLLECTION = 'snowdatas';
const ONE_HOUR = 60 * 60 * 1000; /* ms */

let cachedDb;

function _insertAllInDB(db, snowdataArray, callback) {

    const col = db.collection(DB_COLLECTION);

    let query = {};
    query.$or = [];
    for (let i = 0; i < snowdataArray.length; i++) {
        let removeStrg = snowdataArray[i].removeStrg;
        let removeStrgObj = { 'removeStrg': removeStrg };
        if (lodash.findIndex(query.$or, removeStrgObj) === -1) {
            query.$or.push(removeStrgObj);
        }
    }
    console.log(' -- t7 -- DBG -- removed snowdatas from DB query: ', query);

    let insertBatch = col.initializeUnorderedBulkOp();
    for (let j = 0; j < snowdataArray.length; j++) {
        insertBatch.insert(snowdataArray[j]);
    }

    col.deleteMany(query, function (err01, result01) {
        if (err01 != null) {
            console.error(' -- t7 -- DBG -- Can not remove snowdatas from DB : ', err01);
            callback();
        } else {
            console.log(' -- t7 -- DBG -- removed snowdatas from DB : ', result01);
            insertBatch.execute(function (err02, result02) {
                if (err02 != null) {
                    console.error(' -- t7 -- DBG -- Can not insert all snowdatas into DB : ', err02);
                } else {
                    console.log(' -- t7 -- DBG -- inserted all snowdatas into DB : ', result02);
                }
                callback();
            });
        }
    });
}

function storeAllInDB(callback) {

    let snowdataArray = [];
    for (let i = 0; i < parsers.length; i++) {
        if (parsers[i].snowdataArray) {
            snowdataArray = snowdataArray.concat(parsers[i].snowdataArray);
            parsers[i].clear();
        }
    }

    if (!snowdataArray || snowdataArray.length === 0) {
        console.warn(' -- t7 -- WRN -- no snowdatas to insert into DB');
        callback();
        return;
    }

    if (cachedDb && cachedDb.serverConfig.isConnected()) {
        _insertAllInDB(cachedDb, snowdataArray, callback);
    } else {
        MongoClient.connect(DB_URI, function (err, db) {
            cachedDb = db;
            if (err != null) {
                console.err(' -- t7 -- DBG -- Can not connect to DB : ', err);
                callback();
            } else {
                _insertAllInDB(cachedDb, snowdataArray, callback);
            }
        });
    }
}

function _findInDb(city, db, callback) {

    const col = db.collection(DB_COLLECTION);

    let findStrg;
    for (let i = 0; i < parsers.length; i++) {
        let searchStrg = parsers[i].webDataContainer.getSearchStrg(city);
        if (searchStrg) {
            findStrg = parsers[i].reduceSearchStrg(searchStrg);
            break;
        }
    }
    if (!findStrg) {
        console.error(' -- t7 -- ERR -- Can not findStrg for: ' + city);
        callback();
        return;
    }

    let query = { findStrg: findStrg };
    col.find(query).toArray(function (err, results) {
        if (err != null) {
            console.error(' -- t7 -- ERR -- Can not find city "' + city + '" from DB : ', err);
            callback();
        } else {
            // console.log(' -- t7 -- DBG -- find reuslts: ', results);
            const now = new Date();
            let retSnowdata;
            for (let i = 0; i < results.length; i++) {
                let lastUpdate = results[i].lastUpdate;
                if ((now - lastUpdate) < ONE_HOUR) {
                    if ( retSnowdata ) {
                        console.warn(' -- t7 -- WRN -- more then one item find in DB for city: ' + city );                        
                    }
                    retSnowdata = new Snowdata(results[i]);
                    retSnowdata.dbResult = true;
                }
            }
            callback(retSnowdata);
        }
    });

}

function loadFromDB(city, callback) {
    if (cachedDb && cachedDb.serverConfig.isConnected()) {
        _findInDb(city, cachedDb, callback);
    } else {
        MongoClient.connect(DB_URI, function (err, db) {
            cachedDb = db;
            if (err != null) {
                console.err(' -- t7 -- DBG -- Can not connect to DB : ', err);
                callback();
            } else {
                _findInDb(city, cachedDb, callback);
            }
        });
    }
}

//=========================================================================================================================================
// 
//=========================================================================================================================================

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
            // console.log(' -- t7 -- DBG -- no city : ' + city);
            this.response.speak(ERROR_NO_CITY);
            this.emit(':responseReady');
        } else {
            if (!(bergfexContainer.getResort(city)) && !(skiinfoContainer.getResort(city))) {
                // console.log(' -- t7 -- DBG -- unkown city : ' + city);
                this.response.speak(ERROR_UNKNOW_CITY);
                this.emit(':responseReady');
            } else {
                loadFromDB(city, (dbSnowData) => {
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

        storeAllInDB(() => {
                    
            if (cachedDb) {
                cachedDb.close();
            }

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
