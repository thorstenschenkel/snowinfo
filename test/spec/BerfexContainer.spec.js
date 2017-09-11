const BergfexContainer = require('../../src/BergfexContainer');

describe('test of BergfexContainer', function () {

    it('test constructor', function () {

        let bergfexContainer = new BergfexContainer();

        expect(bergfexContainer.getResort('Ischgl')).toBeDefined();
        expect(bergfexContainer.getHost('Ischgl')).toBe('www.bergfex.at');
        expect(bergfexContainer.getPath('Ischgl')).toBe('/tirol/schneewerte/');
        expect(bergfexContainer.getSearch('Ischgl').toString()).toBe('Ischgl');
        expect(bergfexContainer.getSpeechstart('Ischgl')).toBe('In');
        expect(bergfexContainer.getSpeechskirresort('Ischgl')).not.toBeDefined();

    });

});
