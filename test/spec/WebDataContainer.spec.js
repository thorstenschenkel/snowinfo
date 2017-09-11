const WebDataContainer = require('../../src/WebDataContainer');

describe('test of WebDataContainer', function () {

    it('test constructor', function () {

        let schneeContainer = new WebDataContainer('schnee');

        expect( schneeContainer.resource).toBe('schnee');
        expect( schneeContainer.push).toBeDefined();
        expect( schneeContainer.pushObject).toBeDefined();
        expect( schneeContainer.getResort).toBeDefined();
        expect( schneeContainer.getHost).toBeDefined();
        expect( schneeContainer.getPath).toBeDefined();
        expect( schneeContainer.getSearch).toBeDefined();
        expect( schneeContainer.getSpeechstart).toBeDefined();
        expect( schneeContainer.getSpeechskirresort).toBeDefined();

    });


    it('test method pushObject', function () {

        let schneeContainer = new WebDataContainer('schnee');

        schneeContainer.pushObject({
            city: 'Fendels',
            host: 'www.schnnee.com',
            path: '/tirol/schneewerte/',
            search: ['Fendels', 'Ried', 'Prutz'],
            speechstart: 'In'
        });

        expect( schneeContainer.getResort('Fendels')).toBeDefined();
        expect( schneeContainer.getHost('Fendels')).toBe('www.schnnee.com');
        expect( schneeContainer.getPath('Fendels')).toBe('/tirol/schneewerte/');
        expect( schneeContainer.getSearch('Fendels').toString()).toBe('Fendels,Ried,Prutz');
        expect( schneeContainer.getSpeechstart('Fendels')).toBe('In');
        expect( schneeContainer.getSpeechskirresort('Fendels')).not.toBeDefined();

    });

});
