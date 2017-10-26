const MongoClient = require('mongodb').MongoClient;

const DB_PWD = 'Byd0RYnRUq1S9Nkp';
const DB_URI = 'mongodb://snowinfo:' + DB_PWD + '@cluster0-shard-00-00-bavvq.mongodb.net:27017,cluster0-shard-00-01-bavvq.mongodb.net:27017,cluster0-shard-00-02-bavvq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

let cachedDb = null;

function sendToAtlas(db, message) {
    db.collection("records").insertOne({
        facebook: {
            messageEnvelope: message
        }
    }, function (err, result) {
        if (err != null) {
            console.error("an error occurred in sendToAtlas", err);
            // callback(null, JSON.stringify(err));
        } else {
            var message = `Inserted a message into Atlas with id: ${result.insertedId}`;
            console.log(message);
            // callback(null, message);
        }
    });
}

function storeInMongoDB(messageEnvelope) {
    if (cachedDb && cachedDb.serverConfig.isConnected()) {
        sendToAtlas(cachedDb, messageEnvelope);
    } else {
        MongoClient.connect(DB_URI, function (err, db) {
            cachedDb = db;
            sendToAtlas(db, messageEnvelope);
        });
    }
}

storeInMongoDB('hello world');