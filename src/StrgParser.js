const AbstractParser = require('./AbstractParser');

class StrgParser extends AbstractParser {

    constructor(webDataContainer) {
        super(webDataContainer);
    }

    getPartContent(htmlString, startTag, endTag) {

        let splitStrings = htmlString.split(startTag);
        if (splitStrings && splitStrings.length > 0) {
            let retStrings = [];
            for (let strg of splitStrings) {
                strg = strg.toLowerCase();
                let start = strg.indexOf('>');
                let end = strg.indexOf(endTag);
                if (start !== -1 || end > start) {
                    start++;
                    strg = strg.substring(start, end);
                    retStrings.push(strg);
                }
            }
            return retStrings;
        }
        return;

    }

    getTablesHtmlContent(htmlString) {
        return this.getPartContent(htmlString, '<table', '</table>');
    }

    getRowHtmlContent(htmlString) {
        return this.getPartContent(htmlString, '<tr', '</tr>');
    }

    getFirstTag(htmlString) {
        const start = htmlString.indexOf('<');
        let end = htmlString.indexOf('>');
        if (start >= 0 && end > start) {
            end++;
            return htmlString.substring(start, end);
        }
        return;
    }

    removeTag(htmlString, tag) {
        let strg = htmlString;
        strg = strg.replace(tag, '');
        const end = strg.indexOf('<');
        if (end != -1) {
            strg = strg.substring(0, end);
        }
        return strg.trim();
    }

    getPureText(htmlString) {
        const tag = this.getFirstTag(htmlString);
        if (tag) {
            return this.removeTag(htmlString, tag);
        } else {
            return htmlString;
        }
    }

    getOnlyInt(strg) {
        if (!strg) {
            return 0;
        }
        let num = strg.replace(/[^0-9]/g, '');
        // console.log(' -- t7 -- DBG -- num: ' + num);
        if (num && num.indexOf('0') === 0) {
            num = num.substring(1);
        }
        if (isNaN(num) || num.length === 0) {
            return 0;
        }
        return parseInt(num);
    }

    getDate(htmlString) {

        if (!htmlString) {
            return;
        }
        if (htmlString.indexOf('heute') != -1) {
            let date = new Date();
            return date;
        }
        if (htmlString.indexOf('gestern') != -1) {
            let date = new Date();
            date.setDate(date.getDate() - 1);
            return date;
        }

        let num = this.getOnlyInt(htmlString);
        if (num && num > 0) {
            let dateStrg = num.toString();
            if (dateStrg.length === 3) {
                dateStrg = '0' + dateStrg;
            }
            if (dateStrg.length === 4) {
                let date = new Date();
                dateStrg += date.getFullYear();
            }
            if (dateStrg.length === 8) {
                dateStrg = dateStrg.slice(4, 8) + '-' + dateStrg.slice(2, 4) + '-' + dateStrg.slice(0, 2);
                return new Date(dateStrg);
            }
        }

    }

    isALetter(charVal) {
        if (charVal.toUpperCase() != charVal.toLowerCase())
            return true;
        else
            return false;
    }

    parse(htmlString, city) {
        if (!htmlString) {
            return;
        }
        let retData;
        this.snowdataArray = [];
        let searchStrg = this.webDataContainer.getSearchStrg(city);
        var tabStrings = this.getTablesHtmlContent(htmlString);
        for (let tabStrg of tabStrings) {
            if (!tabStrg) continue;
            // console.log(' -- t7 -- DBG -- tabStrg: ' + tabStrg);
            if (this.isSnowDepthTable(tabStrg)) {
                var trStrings = this.getRowHtmlContent(tabStrg);
                for (let trString of trStrings) {
                    if (!trString || trString.indexOf('<th') != -1) continue;
                    // console.log(' -- t7 -- DBG -- trString: ' + trString);
                    let snowdata = this.getSnowDataFromHtml(trString);
                    if (!snowdata) continue;
                    // console.log(' -- t7 -- DBG -- snowdata: ', snowdata);
                    // console.log(' -- t7 -- DBG -- searchStrg: ', searchStrg);
                    if (this.searchCompareStrg(searchStrg, snowdata)) {
                        snowdata.city = city;
                        if (retData) {
                            console.warn(' -- t7 -- WRN -- multi retData!', retData);
                        }
                        retData = snowdata;
                        console.log(' -- t7 -- DBG -- retData: ', retData);
                    }
                    this.addDbFindAndRemoveStrgs(snowdata, city);
                    if (snowdata && snowdata.findStrg) {
                        this.snowdataArray.push(snowdata);
                    }
                }
            }
        }
        return retData;
    }

    // abstract
    isSnowDepthTable(tabStrg) { // jshint ignore:line
        return;
    }

    // abstract
    getSnowDataFromHtml(trString) { // jshint ignore:line
        return;
    }

}

module.exports = StrgParser;
