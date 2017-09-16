const BergfexStrgParser = require('../../src/BergfexStrgParser');
const WebDataContainer = require('../../src/WebDataContainer');

describe('test of BergfexStrgParser', function () {

    it('test constructor', function () {

        let parser = new BergfexStrgParser();
        expect(parser.isSnowDepthTable).toBeDefined();
        expect(parser.getSnowDataFromHtml).toBeDefined();

    });

    it('test method searchCompare', function () {

        let parser = new BergfexStrgParser();

        let htmlString = '<tr>';
        htmlString += '<th style="width: 100%;">Skigebiet</th>';
        htmlString += '<th width="40">Tal</th>';
        htmlString += '</tr>';
        htmlString = htmlString.toLowerCase();

        expect(parser.isSnowDepthTable(htmlString)).toBe(false);

        htmlString = '<tr>';
        htmlString += '<th style="width: 100%;">Skigebiet</th>';
        htmlString += '<th width="40">Tal</th>';
        htmlString += '<th width="40">Berg</th>';
        htmlString += '</tr>';
        htmlString = htmlString.toLowerCase();

        expect(parser.isSnowDepthTable(htmlString)).toBe(true);

    });


});
