const StrgParser = require('../../src/StrgParser');
const WebDataContainer = require('../../src/WebDataContainer');

describe('test of StrgParser', function () {

    it('test constructor', function () {

        let parser = new StrgParser();
        expect(parser.getPartContent).toBeDefined();
        expect(parser.getTablesHtmlContent).toBeDefined();
        expect(parser.getPartContent).toBeDefined();
        expect(parser.removeTag).toBeDefined();
        expect(parser.getPureText).toBeDefined();
        expect(parser.getHtmlPagePromise).toBeDefined();
        expect(parser.getOnlyInt).toBeDefined();
        expect(parser.getDate).toBeDefined();
        expect(parser.searchCompareStrg).toBeDefined();
        expect(parser.parseHtml).toBeDefined();
        expect(parser.isSnowDepthTable).toBeDefined();
        expect(parser.getSnowDataFromHtml).toBeDefined();
        expect(parser.reduceSearchStrg).toBeDefined();
        expect(parser.addDbFindAndRemoveStrgs).toBeDefined();

    });

    it('test method getPartContent', function () {

        let parser = new StrgParser();

        let hmtlStrg = '<td class="snowdepth" width="40">45 cm</td><td class="snowdepth" width="25"> 10 cm </td>';
        let tdStrings = parser.getPartContent(hmtlStrg, '<td', '</td>');
        expect(tdStrings.length).toBe(2);
        expect(tdStrings[0]).toBe('45 cm');
        expect(tdStrings[1]).toBe(' 10 cm ');

    });

    it('test method getFirstTag', function () {

        let parser = new StrgParser();

        let hmtlStrg = '<td class="snowdepth" width="40">45 cm</td>';
        let tag = parser.getFirstTag(hmtlStrg);
        expect(tag).toBe('<td class="snowdepth" width="40">');

        hmtlStrg = '-- <tr><td>45 cm</td></tr>';
        tag = parser.getFirstTag(hmtlStrg);
        expect(tag).toBe('<tr>');

    });

    it('test method removeTag', function () {

        let parser = new StrgParser();

        let hmtlStrg = '<td class="snowdepth" width="40">45 cm</td>';
        let tag = parser.removeTag(hmtlStrg, '<td class="snowdepth" width="40">');
        expect(tag).toBe('45 cm');

        hmtlStrg = '<tr><td>45 cm</td></tr>';
        tag = parser.removeTag(hmtlStrg, '<tr>');
        expect(tag).toBe(''); // !?! correct ?!?

    });

    it('test method getPureText', function () {

        let parser = new StrgParser();

        let hmtlStrg = '<td class="snowdepth" width="40">45 cm</td>';
        let tag = parser.getPureText(hmtlStrg);
        expect(tag).toBe('45 cm');

    });

    it('test method getOnlyInt', function () {

        let parser = new StrgParser();

        let hmtlStrg = ' 45 cm<';
        let intValue = parser.getOnlyInt(hmtlStrg);
        expect(intValue).toBe(45);

        intValue = parser.getOnlyInt('hello');
        expect(intValue).toBe(0);

        intValue = parser.getOnlyInt();
        expect(intValue).toBe(0);

    });

    it('test method getDate', function () {

        let parser = new StrgParser();

        const today = new Date();
        let retDate = parser.getDate('heute');
        expect(today.getDate()).toBe(retDate.getDate());
        expect(today.getFullYear()).toBe(retDate.getFullYear());
        expect(today.getMonth()).toBe(retDate.getMonth());

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        retDate = parser.getDate('gestern');
        expect(yesterday.getDate()).toBe(retDate.getDate());
        expect(yesterday.getFullYear()).toBe(retDate.getFullYear());
        expect(yesterday.getMonth()).toBe(retDate.getMonth());

        const anyDay = new Date('2016-12-31');
        retDate = parser.getDate('31.12.2016');
        expect(anyDay.getDate()).toBe(retDate.getDate());
        expect(anyDay.getFullYear()).toBe(retDate.getFullYear());
        expect(anyDay.getMonth()).toBe(retDate.getMonth());

        const shortDay = new Date(today.getFullYear() + '-03-02');
        retDate = parser.getDate('2.03.');
        expect(shortDay.getDate()).toBe(retDate.getDate());
        expect(shortDay.getFullYear()).toBe(retDate.getFullYear());
        expect(shortDay.getMonth()).toBe(retDate.getMonth());

    });

    it('test method reduceSearchStrg', function () {

        let parser = new StrgParser();

        let strg = 'Hello world! 1 2';
        expect(parser.reduceSearchStrg(strg)).toBe('helloworld12');

    });


    it('test method addDbFindAndRemoveStrgs', function () {

        let schneeContainer = new WebDataContainer('schnee');
        schneeContainer.pushObject({
            city: 'Fendels',
            host: 'www.schnnee.com',
            path: '/tirol/schneewerte/',
            search: ['Fendels', 'Ried', 'Prutz'],
            speechstart: 'In'
        });
        let parser = new StrgParser(schneeContainer);
        let snowdata = {};
        snowdata.skiresort = 'Galtür / Paznaun-Ischgl';
        parser.addDbFindAndRemoveStrgs(snowdata, 'Fendels');
        expect(snowdata.findStrg).toBe('galtrpaznaunischgl');
        expect(snowdata.removeStrg).toBe('www.schnnee.com/tirol/schneewerte/');

    });

    it('test method searchCompareStrg', function () {

        let parser = new StrgParser();

        let searchStrg = '';
        let snowdata = {};
        expect(parser.searchCompareStrg(searchStrg, snowdata)).toBe(false);

        searchStrg = 'Hintertuxer Gletscher / Hintertux';
        snowdata.skiresort = ' Hintertuxer Gletscher / Hintertux ';
        expect(parser.searchCompareStrg(searchStrg, snowdata)).toBe(true);

        searchStrg = 'Hintertuxer Gletscher';
        snowdata.skiresort = ' Hintertuxer Gletscher / Hintertux ';
        expect(parser.searchCompareStrg(searchStrg, snowdata)).toBe(false);

        searchStrg = 'Hintertuxer Gletscher';
        snowdata.skiresort = 'Hintertuxer';
        expect(parser.searchCompareStrg(searchStrg, snowdata)).toBe(false);

    });

});
