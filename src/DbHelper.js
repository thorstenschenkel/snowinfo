const MongoClient = require('mongodb').MongoClient;
const lodash = require('lodash');
const Snowdata = require('./Snowdata');

const DB_COLLECTION = 'snowdatas';
const ONE_HOUR = 60 * 60 * 1000; /* ms */

class DbHelper {

    constructor(parsers,dbUri) {
        this.parsers = parsers;
        this.dbUri = dbUri;
        this.cache = {};
    }    

    _insertAllInDB(db, snowdataArray, callback) {

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

    storeAllInDB(callback) {

        let snowdataArray = [];
        for (let i = 0; i < this.parsers.length; i++) {
            if (this.parsers[i].snowdataArray) {
                snowdataArray = snowdataArray.concat(this.parsers[i].snowdataArray);
                this.parsers[i].clear();
            }
        }

        if (!snowdataArray || snowdataArray.length === 0) {
            console.warn(' -- t7 -- WRN -- no snowdatas to insert into DB');
            callback();
            return;
        }

        const scope = this;
        if (scope.cache.db && scope.cache.db.serverConfig.isConnected()) {
            scope._insertAllInDB(scope.cache.db, snowdataArray, callback);
        } else {
            MongoClient.connect(scope.dbUri, function (err, db) {
                scope.cache.db = db;
                if (err != null) {
                    console.error(' -- t7 -- ERR -- Can not connect to DB : ', err);
                    callback();
                } else {
                    scope._insertAllInDB(scope.cache.db, snowdataArray, callback);
                }
            });
        }
    }

    _findInDb(city, db, callback) {

        const col = db.collection(DB_COLLECTION);

        let findStrg;
        const parsers = this.parsers;
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
                        if (retSnowdata) {
                            console.log(' -- t7 -- DBG -- more then one item find in DB for city: ' + city);                            
                            if ( parsers.length > 0 && retSnowdata.resource == parsers[0].getResource() ) {
                                continue;
                            }
                        }
                        retSnowdata = new Snowdata(results[i]);
                        retSnowdata.dbResult = true;
                    }
                }
                callback(retSnowdata);
            }
        });

    }

    loadFromDB(city, callback) {
        const scope = this;
        if (scope.cache.db && scope.cache.db.serverConfig.isConnected()) {
            scope._findInDb(city, scope.cache.db, callback);
        } else {
            MongoClient.connect(scope.dbUri, function (err, db) {
                scope.cache.db = db;
                if (err != null) {
                    console.error(' -- t7 -- ERR -- Can not connect to DB : ', err);
                    callback();
                } else {
                    scope._findInDb(city, scope.cache.db, callback);
                }
            });
        }
    }

    close() {
        if (this.cache.db) {
            this.cache.db.close();
        }    
    }

}

module.exports = DbHelper;
