const SkiinfoContainer = require('../../src/SkiinfoContainer');

describe('test of SkiinfoContainer', function () {

    it('test constructor', function () {

        let skiinfoContainer = new SkiinfoContainer();

        expect(skiinfoContainer.getResort('Sölden')).toBeDefined();
        expect(skiinfoContainer.getHost('Sölden')).toBe('www.skiinfo.de');
        expect(skiinfoContainer.getPath('Sölden')).toBe('/oesterreich/schneehoehen-schneebericht.html');
        expect(skiinfoContainer.getSpeechstart('Sölden')).toBe('In');
        expect(skiinfoContainer.getSpeechskiresort('Sölden')).not.toBeDefined();

    });

});
