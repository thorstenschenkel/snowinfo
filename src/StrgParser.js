const http = require('http');

class StrgParser {

    constructor(webDataContainer) {
        this.webDataContainer = webDataContainer;
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

        if (!this.webDataContainer.getResort(city)) {
            // console.log(' -- t7 - DBG -- no resort for "' + city + '" in "' + this.webDataContainer.resource + '"');
            return callback();
        }

        const host = this.webDataContainer.getHost(city);
        if (!host) {
            console.error(' -- t7 - ERR -- Can not get HTML page, no host');
            return callback();
        }
        const path = this.webDataContainer.getPath(city);
        if (!path) {
            console.error(' -- t7 - ERR -- Can not get HTML page, no path');
            return callback();
        }

        return http.get({
            host: host,
            path: path
        }, function (response) {
            let body = '';
            response.on('data', function (d) {
                body += d;
            });
            response.on('end', function () {
                callback(body);
            });
        }).on('error', function (e) {
            console.warn(' -- t7 -- Can not get HTML page: ' + e.message);
            callback();
        });

    }

    getOnlyInt(strg) {
        if (!strg) {
            return 0;
        }
        let num = strg.replace(/[^0-9]/g, '');
        // console.log(' -- t7 -- num: ' + num);
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

    searchCompare(searchArray, snowdata) {
        // console.log(' -- t7 -- searchCompare: ', searchArray);
        // console.log(' -- t7 -- searchCompare: ', snowdata);
        if (!searchArray || !snowdata || !snowdata.skiresort) {
            return false;
        }
        let resort = snowdata.skiresort.toLowerCase();
        for (let key in searchArray) {
            let search = searchArray[key].toLowerCase();
            if (resort.indexOf(search) === -1) {
                // console.log(' -- t7 -- search: ' + search);
                return false;
            }
        }
        return true;
    }

    parseHtml(htmlString, city) {
        if (!htmlString) {
            return;
        }
        let retData;
        let searchArray = this.webDataContainer.getSearch(city);
        var tabStrings = this.getTablesHtmlContent(htmlString);
        for (let tabStrg of tabStrings) {
            if (!tabStrg) continue;
            if (this.isSnowDepthTable(tabStrg)) {
                // console.log(' -- t7 -- tabStrg: ' + tabStrg);
                var trStrings = this.getRowHtmlContent(tabStrg);
                for (let trString of trStrings) {
                    if (!trString) continue;
                    // console.log(' -- t7 -- trString: ' + trString);
                    let snowdata = this.getSnowDataFromHtml(trString);
                    if (!snowdata) continue;
                    // console.log(' -- t7 -- snowdata: ', snowdata);
                    if (this.searchCompare(searchArray, snowdata)) {
                        snowdata.city = city;
                        retData = snowdata;
                        // console.log(' -- t7 -- retData: ', retData);
                    }
                }
            }
        }
        return retData;
    }

    isSnowDepthTable(tabStrg) { // abstract
        return;
    }

    getSnowDataFromHtml(trString) { // abstract
        return;
    }

    getResource() {
        return this.webDataContainer.resource;
    }

}

module.exports = StrgParser;
