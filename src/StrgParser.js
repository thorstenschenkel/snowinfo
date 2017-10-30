const http = require('http');
const https = require('https');

function _body(response,callback) {
    let body = '';
    response.on('data', function (d) {
        body += d;
    });
    response.on('end', function () {
        if ( body.length === 0 ) {
            console.warn(' -- t7 - WRN -- body of HTML page if empty');
        }
        // console.log(' -- t7 -- DBG -- body: ' + body);
        callback(body);
    });
}

class StrgParser {

    constructor(webDataContainer) {
        this.webDataContainer = webDataContainer;
        this.snowdataArray = [];
    }

    clear() {
        this.snowdataArray = [];
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

    getHtmlPage(city, callback) {

        console.log(' -- t7 -- DBG -- getHtmlPage', this.constructor.name);
        
        if (!this.webDataContainer.getResort(city)) {
            // console.log(' -- t7 -- DBG -- no resort for "' + city + '" in "' + this.webDataContainer.resource + '"');
            callback();
            return;
        }

        const host = this.webDataContainer.getHost(city);
        if (!host) {
            console.error(' -- t7 - ERR -- Can not get HTML page, no host');
            callback();
            return;
        }
        const path = this.webDataContainer.getPath(city);
        if (!path) {
            console.error(' -- t7 - ERR -- Can not get HTML page, no path');
            callback();
            return;
        }

        const protocol = this.webDataContainer.getProtocol();
            if ( protocol === 'https' ) {
            // console.log(' -- t7 -- DBG -- https');
            return https.get({
                host: host,
                path: path
            }, function (response) {
                // console.log(' -- t7 -- DBG -- https-response: ', response);
                _body(response,callback);
            }).on('error', function (e) {
                console.warn(' -- t7 -- WRN -- Can not get HTML page over https: ' + e.message);
                callback();
            });
        } else {
            // console.log(' -- t7 -- DBG -- http');
            return http.get({
                host: host,
                path: path
            }, function (response) {
                // console.log(' -- t7 -- DBG -- http-response: ', response);
                _body(response,callback);
            }).on('error', function (e) {
                console.warn(' -- t7 -- WRN -- Can not get HTML page over http: ' + e.message);
                callback();
            });
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

    reduceSearchStrg(searchString) {
        if ( searchString ) {
            let search = searchString.toLowerCase();
            return search.replace(/[^0-9a-z]/gi, '');        
        }
    }

    searchCompareStrg(searchString, snowdata) {

        if (!searchString || !snowdata || !snowdata.skiresort) {
            return false;
        }
        let resort = this.reduceSearchStrg(snowdata.skiresort);
        let search = this.reduceSearchStrg(searchString);

        return resort === search;

    }

    addDbFindAndRemoveStrgs( snowdata, city ) {
        snowdata.findStrg = this.reduceSearchStrg(snowdata.skiresort);
        snowdata.removeStrg = this.webDataContainer.getHost(city) + this.webDataContainer.getPath(city);
    }

    parseHtml(htmlString, city) {
        if (!htmlString) {
            return;
        }
        let retData;
        this.snowdataArray = [];
        let searchStrg = this.webDataContainer.getSearchStrg(city);
        var tabStrings = this.getTablesHtmlContent(htmlString);
        for (let tabStrg of tabStrings) {
            if (!tabStrg) continue;
            if (this.isSnowDepthTable(tabStrg)) {
                // console.log(' -- t7 -- DBG -- tabStrg: ' + tabStrg);
                var trStrings = this.getRowHtmlContent(tabStrg);
                for (let trString of trStrings) {
                    if (!trString) continue;
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
                    this.addDbFindAndRemoveStrgs(snowdata,city);
                    if ( snowdata && snowdata.findStrg ) {
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

    getResource() {
        return this.webDataContainer.resource;
    }

}

module.exports = StrgParser;
