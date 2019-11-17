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
        let log = htmlString.indexOf('galt') > 0;
        // if (log) {
        //     console.log(' -- t7 -- htmlString: ' + htmlString);
        // }
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
                case 4: // status + lifte
                    // status
                    if (tdStrg.indexOf('icon-status0') > 0) {
                        snowdata.status = 'closed';
                    } else if (tdStrg.indexOf('icon-status1') > 0) {
                        snowdata.status = 'open';
                    }
                    // lifte
                    const statusLifteStrgs = tdStrg.split('</div>');
                    if (statusLifteStrgs && statusLifteStrgs.length > 1) {
                        const liftStrgs = statusLifteStrgs[1].split('/');
                        if (liftStrgs && liftStrgs.length > 0) {
                            snowdata.skiliftOpen = this.getOnlyInt(liftStrgs[0]);
                            snowdata.skiliftTotal = this.getOnlyInt(liftStrgs[1]);
                        }
                    }
                    break;
                case 5: // datum
                    snowdata.reportDate = this.getDate(strg);
                    break;
            }
            i++;
        }
        return snowdata;
    }

}

module.exports = BergfexStrgParser;
