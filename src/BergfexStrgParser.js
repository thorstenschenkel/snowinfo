const StrgParser = require('./StrgParser');
const Snowdata = require('./Snowdata');

class BergfexStrgParser extends StrgParser {

    constructor(container) {
        super(container);
    }

    isSnowDepthTable(tabStrg) {
        return tabStrg.indexOf('skigebiet') != -1 && tabStrg.indexOf('berg') != -1;
    }

    getSnowDataFromHtml(htmlString) {
        let snowdata = new Snowdata();
        snowdata.resource = this.getResource();
        snowdata.lastUpdate = Date.now();
        snowdata.lowerSnowDepth = 0;
        snowdata.upperSnowDepth = 0;
        let tdStrings = this.getPartContent(htmlString, '<td', '</td>');
        let i = 0;
        for (let tdStrg of tdStrings) {
            let strg = tdStrg.trim();
            // console.log(' -- t7 -- strg: ' + strg);
            strg = this.getPureText(strg);
            // console.log(' -- t7 -- pure strg: ' + strg);
            switch (i) {
                case 0: // skigebiet
                    if (strg) {
                        snowdata.skiresort = strg.trim();
                    } else {
                        snowdata.skiresort = '';
                        console.warn(' -- t7 -- warn -- no skiresort: ', htmlString);
                    }
                    break;
                case 1: // tal
                    snowdata.lowerSnowDepth = this.getOnlyInt(strg);
                    break;
                case 2: // berg
                    snowdata.upperSnowDepth = this.getOnlyInt(strg);
                    break;
                case 3: // neu
                    break;
                case 4: // lifte
                    var liftStrgs = strg.split('/');
                    if (liftStrgs && liftStrgs.length > 0) {
                        snowdata.skiliftOpen = this.getOnlyInt(liftStrgs[0]);
                        snowdata.skiliftTotal = this.getOnlyInt(liftStrgs[1]);
                    }
                    break;
                case 5: // status
                    if (tdStrg.indexOf('/images/icons/lifte-pisten/status0.png') > 0) {
                        snowdata.status = 'closed';
                    } else if (tdStrg.indexOf('/images/icons/lifte-pisten/status1.png') > 0) {
                        snowdata.status = 'open';
                    }
                    break;
                case 6: // datum
                    snowdata.reportDate = this.getDate(strg);
                    break;
            }
            i++;
        }
        return snowdata;
    }

}

module.exports = BergfexStrgParser;
