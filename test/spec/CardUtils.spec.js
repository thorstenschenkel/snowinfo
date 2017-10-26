const CardUtils = require('../../src/CardUtils');
const Snowdata = require('../../src/Snowdata');

describe('test of CardUtils', function () {

    it('test constructor', function () {

        const snowdata = {};
        snowdata.lowerSnowDepth = 10;
        const cardutils = new CardUtils('Ischgl', snowdata);

        expect(cardutils.snowdata.lowerSnowDepth).toBe(10);
        expect(cardutils.city).toBe('Ischgl');

        expect(cardutils.addCardRenderer).toBeDefined();
        expect(cardutils.getCardTitle).toBeDefined();
        expect(cardutils.getCardContent).toBeDefined();

    });

    it('test the method getCardTitle', function () {

        const cardutils = new CardUtils('Ischgl', {});

        expect(cardutils.getCardTitle()).toBe('Schneehöhen ISCHGL');

    });

    it('test the method getCardContent', function () {

        let snowdata;
        let cardutils = new CardUtils('Ischgl', snowdata);

        expect(cardutils.getCardContent()).toBe('Für den Ort können keine Informationen geliefert werden!');

        snowdata = new Snowdata();
        snowdata.reportDate = new Date(86400000);
        cardutils = new CardUtils('Ischgl', snowdata);

        expect(cardutils.getCardContent()).toBe('Für den Ort können keine akutellen Informationen geliefert werden!');

        snowdata.reportDate = new Date();
        snowdata.lowerSnowDepth = 12;
        snowdata.upperSnowDepth = 125;
        cardutils = new CardUtils('', snowdata);

        let content = cardutils.getCardContent();
        console.log(content);
        let lowerIndex = content.indexOf('Schneehöhe Tal: 12 cm');
        expect(lowerIndex).toBe(0);
        let upperIndex = content.indexOf('Schneehöhe Berg: 125 cm');
        expect(lowerIndex < upperIndex).toBe(true);
        expect(content.indexOf('Status Skigebiet') === -1).toBe(true);
        expect(content.indexOf('Lifte/Bahnen') === -1).toBe(true);
        
        snowdata.reportDate = new Date();
        snowdata.lowerSnowDepth = 12;
        snowdata.upperSnowDepth = 125;
        snowdata.status = 'open';
        cardutils = new CardUtils('', snowdata);

        content = cardutils.getCardContent();
        expect(content.indexOf('Status Skigebiet: GEÖFFNET') > 0).toBe(true);

        snowdata.reportDate = new Date();
        snowdata.lowerSnowDepth = 12;
        snowdata.upperSnowDepth = 125;
        snowdata.status = 'closed';
        cardutils = new CardUtils('', snowdata);

        content = cardutils.getCardContent();
        expect(content.indexOf('Status Skigebiet: GESCHLOSSEN') > 0).toBe(true);

        snowdata.reportDate = new Date();
        snowdata.lowerSnowDepth = 12;
        snowdata.upperSnowDepth = 125;
        snowdata.skiliftOpen = 3;
        snowdata.skiliftTotal = 10;
        cardutils = new CardUtils('', snowdata);

        content = cardutils.getCardContent();
        expect(content.indexOf('Lifte/Bahnen: 3 von 10 offen') > 0).toBe(true);


        snowdata.reportDate = new Date();
        snowdata.lowerSnowDepth = 12;
        snowdata.upperSnowDepth = 125;
        delete snowdata.skiliftOpen;
        snowdata.skiliftTotal = 10;
        cardutils = new CardUtils('', snowdata);

        content = cardutils.getCardContent();
        expect(content.indexOf('Lifte/Bahnen') === -1).toBe(true);
        
    });

});