const http = require('http');
const https = require('https');

const PARSER_GET_TIMEOUT = 6000; // 6 sec

function _bodyPromise(response, resolve) {
    let body = '';
    response.on('data', function (d) {
        body += d;
    });
    response.on('end', function () {
        if (body.length === 0) {
            console.warn(' -- t7 - WRN -- body of HTML page if empty');
        }
        // console.log(' -- t7 -- DBG -- body: ' + body);
        resolve(body);
    });
}

class AbstractParser {

    constructor(webDataContainer) {
        this.webDataContainer = webDataContainer;
        this.snowdataArray = [];
    }

    clear() {
        this.snowdataArray = [];
    }

    getResourcePromise(city) {

        const container = this.webDataContainer;

        return new Promise((resolve, reject) => {

            if (!container.getResort(city)) {
                // console.log(' -- t7 -- DBG -- no resort for "' + city + '" in "' + this.webDataContainer.resource + '"');
                reject(new Error('no resort'));
                return;
            }

            const host = container.getHost(city);
            if (!host) {
                console.error(' -- t7 - ERR -- Can not get HTML page, no host');
                reject(new Error('no host'));
                return;
            }
            const path = container.getPath(city);
            if (!path) {
                console.error(' -- t7 - ERR -- Can not get HTML page, no path');
                reject(new Error('no path'));
                return;
            }

            const lib = container.getProtocol() === 'https' ? https : http;
            const request = lib.get({
                host: host,
                path: path
            }, function (response) {
                // console.log(' -- t7 -- DBG -- https-response: ', response);
                _bodyPromise(response, resolve);
            }).on('error', function (e) {
                console.warn(' -- t7 -- WRN -- Can not get HTML page over http/https: ' + e.message);
                reject(new Error('Failed to load page'));
            });
            if (request) {
                request.setTimeout(PARSER_GET_TIMEOUT, function () {
                    console.error(' -- t7 -- ERR -- timeout of parser [resource:' + container.resource + ']');
                    request.abort();
                    reject(new Error('Timeout'));
                });
                request.end();
            }
        
        });

    }

    reduceSearchStrg(searchString) {
        if (searchString) {
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

    getResource() {
        return this.webDataContainer.resource;
    }
    
    addDbFindAndRemoveStrgs(snowdata, city) {
        snowdata.findStrg = this.reduceSearchStrg(snowdata.skiresort);
        snowdata.removeStrg = this.webDataContainer.getHost(city) + this.webDataContainer.getPath(city);
    }


}

module.exports = AbstractParser;
