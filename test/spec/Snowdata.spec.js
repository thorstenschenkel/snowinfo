const Snowdata = require('../../src/Snowdata');

describe('test of CardUtils', function () {

    it('test constructor', function () {

        const snowdata = new Snowdata();

        expect(snowdata.isOutdated).toBeDefined();

    });

    it('test the method isOutdated', function () {

        let snowdata = new Snowdata();

        expect(snowdata.isOutdated()).toBe(true);

        snowdata.reportDate = new Date(); // today
        expect(snowdata.isOutdated()).toBe(false);

        snowdata.reportDate.setDate(snowdata.reportDate.getDate() - 1); // yesterday
        expect(snowdata.isOutdated()).toBe(false);

        snowdata.reportDate = new Date(86400000);
        expect(snowdata.isOutdated()).toBe(true);
        
    });

});