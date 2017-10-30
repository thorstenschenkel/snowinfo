const StrgParser = require('./StrgParser');
const Snowdata = require('./Snowdata');

class SkiinfoStrgParser extends StrgParser {

    constructor(container) {
        super(container);
    }
    
    getProtocol() {
        return 'https';
    }

    isSnowDepthTable(tabStrg) {
        console.log(' -- t7 - DBG -- tabStrg: ' + tabStrg);
        return tabStrg.indexOf('skigebiet') != -1 && tabStrg.indexOf('schneehöhe') != -1;
    }

    getSnowDataFromHtml(htmlString) {
        if (htmlString.indexOf('<div class="lsos">') != -1) {
            // table legend
            return;
        }
        let snowdata = new Snowdata();
        snowdata.resource = this.getResource();
        snowdata.lastUpdate = Date.now();
        snowdata.lowerSnowDepth = 0;
        snowdata.upperSnowDepth = 0;
        let tdStrings = this.getPartContent(htmlString, '<td', '</td>');
        console.log(' -- t7 - DBG -- tdStrings: ' + tdStrings);
        let i = 0;
        for (let tdStrg of tdStrings) {
            let strg = tdStrg.trim();
            // console.log(' -- t7 - DBG -- strg: ' + strg);
            switch (i) {
                case 0: // skigebiet + datum 
                    let substrings0 = strg.split('/div>');
                    // console.log(' -- t7 -- substrings0: ', substrings0);
                    if (substrings0 && substrings0.length >= 3) {
                        // skigebiet
                        let skiresort = substrings0[0];
                        skiresort = skiresort.replace('<div class="name">', '');
                        skiresort = this.getPureText(skiresort);
                        if (skiresort) {
                            snowdata.skiresort = skiresort.trim();
                        } else {
                            snowdata.skiresort = '';
                            console.warn(' -- t7 -- warn -- no skiresort: ', htmlString);
                        }
                        // region
                        // let regionStrg = substrings0[1];
                        // datum
                        let dateStrg = substrings0[2];
                        snowdata.reportDate = this.getSkiinfoDate(dateStrg); // TODO
                    }
                    break;
                case 1: // status
                    if (strg.indexOf('openstate stateD2') > 0) {
                        snowdata.status = 'closed';
                    } else if (strg.indexOf('openstate stateD1') > 0) {
                        snowdata.status = 'open';
                    }
                    break;
                case 2: // neuschnee
                    break;
                case 3: // tal + berg
                    strg = this.getPureText(strg);
                    strg = strg.replace(/cm/gi, '');
                    let depthStrgs = strg.split('-');
                    if (depthStrgs && depthStrgs.length === 2) {
                        snowdata.lowerSnowDepth = this.getOnlyInt(depthStrgs[0]);
                        snowdata.upperSnowDepth = this.getOnlyInt(depthStrgs[1]);
                    }
                    break;
                case 4: // lifte
                    var liftStrgs = strg.split('/');
                    if (liftStrgs && liftStrgs.length > 0) {
                        snowdata.skiliftOpen = this.getOnlyInt(liftStrgs[0]);
                        snowdata.skiliftTotal = this.getOnlyInt(liftStrgs[1]);
                    }
                    break;
                case 5: // pisten
                    break;
                case 6: // wetter
                    break;
            }
            i++;
        }
        return snowdata;
    }

    getSkiinfoDate(htmlString) {

        if (!htmlString) {
            return;
        }

        let dateStrg = this.getPureText(htmlString);
        let datestrings = dateStrg.split('/');
        if (datestrings && datestrings.length >= 2) {
            let dd = this.getOnlyInt(datestrings[0]);
            let mm = this.getOnlyInt(datestrings[1]);
            if (dd && dd > 0 && mm && mm > 0) {
                dateStrg = '';
                if (dd < 10) dateStrg += '0';
                dateStrg += dd.toString();
                if (mm < 10) dateStrg += '0';
                dateStrg += mm.toString();
                let date = new Date();
                dateStrg += date.getFullYear();
                if (dateStrg.length === 8) {
                    dateStrg = dateStrg.slice(4, 8) + '-' + dateStrg.slice(2, 4) + '-' + dateStrg.slice(0, 2);
                    return new Date(dateStrg);
                }
            }
        }

        console.log(' -- t7 - DBG -- unexpected date string: ' + htmlString);

    }

}

module.exports = SkiinfoStrgParser;
