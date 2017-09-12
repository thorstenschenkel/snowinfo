const StrgParser = require('./StrgParser');

class SkiinfoStrgParser extends StrgParser {

    constructor(container) {
        super(container);
    };

    isSnowDepthTable(tabStrg) {
        return tabStrg.indexOf('skigebiet') != -1 && tabStrg.indexOf('schneehöhe') != -1
    }

    getSnowDataFromHtml(htmlString) {
        let snowdata = {};
        snowdata.resource = skiinfoContainer.resource;
        snowdata.lastUpdate = Date.now();
        snowdata.lowerSnowDepth = 0;
        snowdata.upperSnowDepth = 0;
        let tdStrings = this.getPartContent(htmlString, '<td', '</td>');
        let i = 0;
        for (let tdStrg of tdStrings) {
            let strg = tdStrg.trim();
            // console.log(' -- t7 -- strg: ' + strg);
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
                        }
                        // region
                        // let regionStrg = substrings0[1];
                        // datum
                        let dateStrg = substrings0[2];
                        snowdata.reportDate = this.getSkiinfoDate(dateStrg); // TODO
                    }
                    break;
                case 1: // status
                    break;
                case 2: // neuschnee
                    break;
                case 3: // tal + berg
                    strg = this.getPureText(strg);
                    strg = strg.replace(/cm/gi, '');
                    let substrings3 = strg.split('-');
                    if (substrings3 && substrings3.length === 2) {
                        snowdata.lowerSnowDepth = this.getOnlyInt(substrings3[0]);
                        snowdata.upperSnowDepth = this.getOnlyInt(substrings3[1]);
                    }
                    break;
                case 4: // lifte
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

        console.log(' -- t7 -- unexpected date string: ' + htmlString);

    }

}

module.exports = SkiinfoStrgParser;
