const SkiinfoStrgParser = require('../../src/SkiinfoStrgParser');
const WebDataContainer = require('../../src/WebDataContainer');

describe('test of SkiinfoStrgParser', function () {

    it('test constructor', function () {

        let parser = new SkiinfoStrgParser();
        expect(parser.isSnowDepthTable).toBeDefined();
        expect(parser.getSnowDataFromHtml).toBeDefined();
        expect(parser.getSkiinfoDate).toBeDefined();

    });

    it('test method searchCompare', function () {

        let parser = new SkiinfoStrgParser();

        let htmlString = '<tr>';
        htmlString += '<th style="width: 100%;">Skigebiet</th>';
        htmlString += '<th width="40">Tal</th>';
        htmlString += '</tr>';
        htmlString = htmlString.toLowerCase();

        expect(parser.isSnowDepthTable(htmlString)).toBe(false);

        htmlString = '<tr>';
        htmlString += '<th style="width: 100%;">Skigebiet</th>';
        htmlString += '<th width="40">schneehöhe</th>';
        htmlString += '</tr>';
        htmlString = htmlString.toLowerCase();

        expect(parser.isSnowDepthTable(htmlString)).toBe(true);

    });


})
