class Snowdata {

    constructor( data ) {
        if ( data ) {
            this.resource = data.resource;
            this.lastUpdate = data.lastUpdate;
            this.lowerSnowDepth = data.lowerSnowDepth;
            this.upperSnowDepth = data.upperSnowDepth;
            this.skiresort = data.skiresort;
            this.skiliftOpen = data.skiliftOpen;
            this.skiliftTotal = data.skiliftTotal;
            this.status = data.status;
            this.reportDate = data.reportDate;
            this.city = data.city;
            this.findStrg = data.findStrg;
            this.removeStrg = data.removeStrg;
        }
    }

    isOutdated() {

        if (!this.reportDate) {
            return true;
        }

        let outdated = new Date();
        outdated.setDate(outdated.getDate() - 8);
        // console.log(' -- t7 -- outdated ', outdated);
        // console.log(' -- t7 -- snowdata.reportDate: ', this.reportDate);
        return (!this.reportDate || (outdated.getTime() > this.reportDate.getTime()));

    }

}

module.exports = Snowdata;