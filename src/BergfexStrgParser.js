const StrgParser = require('./StrgParser');

class BergfexStrgParser extends StrgParser {

    constructor(container) {
        super(container);
    }

    isSnowDepthTable(tabStrg) {
        return tabStrg.indexOf('skigebiet') != -1 && tabStrg.indexOf('berg') != -1
    }

    getSnowDataFromHtml(htmlString) {
        let snowdata = {};
        snowdata.resource = container.resource;
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
                    break;
                case 5: // status
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