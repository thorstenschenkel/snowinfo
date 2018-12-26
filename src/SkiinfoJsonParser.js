const AbstractParser = require('./AbstractParser');
const Snowdata = require('./Snowdata');

class SkiinfoJsonParser extends AbstractParser {

    constructor(container) {
        super(container);
    }

    getSnowDataFromRow(row) {
        let snowdata = new Snowdata();
        snowdata.resource = this.getResource();
        snowdata.lastUpdate = Date.now();
        snowdata.lowerSnowDepth = row.snowcone.base_depth_cm;
        snowdata.upperSnowDepth = row.snowcone.top_depth_cm;
        snowdata.skiliftOpen = row.snowcone.lifts_open;
        snowdata.skiliftTotal = row.resortProfile.num_lifts;
        snowdata.skiresort = row.resort_name;
        if ( row.open_flag === 1) {
            snowdata.status = 'closed';
        } else {
            snowdata.status = 'open';
        }
        const unixTimestamp = row.snowcone.active_date_epoch;
        snowdata.reportDate = new Date( unixTimestamp * 1000);
        return snowdata;
    }

    parse(jsonString, city) {
        if (!jsonString) {
            return;
        }
        let retData;
        this.snowdataArray = [];
        const resortlist = JSON.parse(jsonString);
        let searchStrg = this.webDataContainer.getSearchStrg(city);
        for (let row of resortlist.rows) {
            let snowdata = this.getSnowDataFromRow(row);
            if (!snowdata) continue;
            // console.log(' -- t7 -- DBG -- snowdata: ', snowdata);
            // console.log(' -- t7 -- DBG -- searchStrg: ', searchStrg);
            if (this.searchCompareStrg(searchStrg, snowdata)) {
                snowdata.city = city;
                if (retData) {
                    console.warn(' -- t7 -- WRN -- multi retData!', retData);
                }
                retData = snowdata;
            }
            this.addDbFindAndRemoveStrgs(snowdata, city);
            if (snowdata && snowdata.findStrg) {
                 this.snowdataArray.push(snowdata);
            }
        }
        return retData;
    }

}

module.exports = SkiinfoJsonParser;
