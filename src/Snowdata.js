class Snowdata {

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