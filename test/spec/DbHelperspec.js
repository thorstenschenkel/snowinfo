const DbHelper = require('../../src/DbHelper');

describe('test of DbHelper', function () {

    it('test constructor', function () {

        const dbHelper = new DbHelper([], 'mongodb://snowinfo:pwd@test');

        expect(dbHelper.dbUri).toBe('mongodb://snowinfo:pwd@test');

        expect(dbHelper.storeAllInDB).toBeDefined();
        expect(dbHelper.loadFromDB).toBeDefined();
        expect(dbHelper.close).toBeDefined();

    });


});