const SpeechOut = require('../../src/SpeechOut');
const WebDataContainer = require('../../src/WebDataContainer');

describe('test of SpeechOut', function () {

    it('test constructor', function () {

        const snowdata = {};
        snowdata.lowerSnowDepth = 10;
        const container = new WebDataContainer('testRes');
        const speechOut = new SpeechOut('Ischgl', snowdata, container);

        expect(speechOut.snowdata.lowerSnowDepth).toBe(10);
        expect(speechOut.city).toBe('Ischgl');
        expect(container.resource).toBe('testRes');

        expect(speechOut._getSpeechstart).toBeDefined();
        expect(speechOut._getSpeechskiresort).toBeDefined();
        expect(speechOut._getSpeechDate).toBeDefined();
        expect(speechOut._addDate).toBeDefined();
        expect(speechOut._addDepth).toBeDefined();
        expect(speechOut._addDepth).toBeDefined();
        expect(speechOut._addStartAndCity).toBeDefined();
        expect(speechOut._getSpeechOut).toBeDefined();
        expect(speechOut.addSpeak).toBeDefined();

    });

    it('test the method _getSpeechDate', function () {

        const speechOut = new SpeechOut('Ischgl', {});

        var dateStrg = speechOut._getSpeechDate('');
        expect(dateStrg).not.toBeDefined();

        const today = new Date();
        dateStrg = speechOut._getSpeechDate(today);
        expect(dateStrg).toBe('heute');

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        dateStrg = speechOut._getSpeechDate(yesterday);
        expect(dateStrg).toBe('gestern');

        const anyDay = new Date('2016-12-31');
        dateStrg = speechOut._getSpeechDate(anyDay);
        expect(dateStrg.indexOf('<say-as')).toBe(0);
        expect(dateStrg.indexOf('2016-12-31') > 0).toBe(true);

    });

    it('test the method _addDepth', function () {

        const snowdata = {};
        let speechOut = new SpeechOut('Ischgl', snowdata);

        let strg = '';
        strg = speechOut._addDepth(strg);
        expect(strg).toBe(' liegt kein Schnee.');

        snowdata.lowerSnowDepth = 0;
        snowdata.upperSnowDepth = 0;
        speechOut = new SpeechOut('Ischgl', snowdata);
        strg = '';
        strg = speechOut._addDepth(strg);
        expect(strg).toBe(' liegt kein Schnee.');

        snowdata.lowerSnowDepth = 10;
        snowdata.upperSnowDepth = 55;
        speechOut = new SpeechOut('Ischgl', snowdata);
        strg = '';
        strg = speechOut._addDepth(strg);
        expect(strg).toBe(' liegen 10 Zentimeter Schnee im Tal und 55 Zentimeter auf dem Berg.');

    });

    it('test the method _addDate', function () {

        const snowdata = {};
        snowdata.reportDate = new Date();
        let speechOut = new SpeechOut('Ischgl', snowdata);

        let strg = '';
        strg = speechOut._addDate(strg);
        expect(strg).toBe(' Die Informationen stammen von heute.');

        snowdata.reportDate = new Date('2016-12-31');
        speechOut = new SpeechOut('Ischgl', snowdata);

        strg = '';
        strg = speechOut._addDate(strg);
        expect(strg.indexOf(' Die Informationen stammen vom ')).toBe(0);

    });

    it('test the method _addStartAndCity', function () {

        const snowdata = {};
        let container = new WebDataContainer('testRes');
        let speechOut = new SpeechOut('Ischgl', snowdata, container);

        let strg = '';
        strg = speechOut._addStartAndCity(strg);
        expect(strg).toBe('In Ischgl');

        container.push('Ischgl', '', '', [], '', 'In dem Skigebiet von', '');
        strg = '';
        strg = speechOut._addStartAndCity(strg);
        expect(strg).toBe('In dem Skigebiet von Ischgl');

        container = new WebDataContainer('testRes');
        speechOut = new SpeechOut('Ischgl', snowdata, container);
        container.push('Ischgl', '', '', [], '', 'In dem Skigebiet', 'Silvretta');
        strg = '';
        strg = speechOut._addStartAndCity(strg);
        expect(strg).toBe('In dem Skigebiet Silvretta');

    });

    it('test the method _getSpeechOut', function () {

        let speechOut = new SpeechOut('Ischgl');

        let strg = speechOut._getSpeechOut();
        expect(strg).toBe('Für den Ort Ischgl kann ich keine Informationen liefern!');

        let snowdata = {};
        snowdata.isOutdated = function () {
            return true;
        };
        speechOut = new SpeechOut('Ischgl', snowdata);
        strg = speechOut._getSpeechOut();
        expect(strg).toBe('Für den Ort Ischgl kann ich keine aktuellen Informationen liefern!');

        snowdata.lowerSnowDepth = 10;
        snowdata.upperSnowDepth = 55;
        snowdata.reportDate = new Date();
        snowdata.isOutdated = function () {
            return false;
        };
        let container = new WebDataContainer('testRes');
        container.push('Ischgl', '', '', [], '', 'In');
        speechOut = new SpeechOut('Ischgl', snowdata, container);
        strg = speechOut._getSpeechOut();
        expect(strg).toBe('In Ischgl liegen 10 Zentimeter Schnee im Tal und 55 Zentimeter auf dem Berg. Die Informationen stammen von heute.');

    });

});