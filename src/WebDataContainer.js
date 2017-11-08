class WebData {

    constructor(city, host, path, searchStrg, speechstart, speechskiresort) {
        this.city = city;
        this.host = host;
        this.path = path;
        this.searchStrg = searchStrg;
        this.speechstart = speechstart;
        this.speechskiresort = speechskiresort;
    }

}

class WebDataContainer {

    constructor( resource ) {
        this.resource = resource;
        this.webDatas = [];
    }


    push(city, host, path, searchStrg, speechstart, speechskiresort) {
        let webData = new WebData(city, host, path,searchStrg, speechstart, speechskiresort);
        this.webDatas.push(webData);
    }

    pushObject(dataObejct) {
        this.push(dataObejct.city,
            dataObejct.host,
            dataObejct.path,
            dataObejct.searchStrg,
            dataObejct.speechstart,
            dataObejct.speechskiresort);
    }

    getProtocol() {
        return;
    }   

    getResort(city) {
        if (!city) return;
        for (let data of this.webDatas) {
            if (data.city.toLowerCase() === city.toLowerCase()) {
                return data;
            }
        }
        return;
    }

    getHost(city) {
        if (!city) return;
        let resort = this.getResort(city);
        if (resort) {
            return resort.host;
        }
        return;
    }

    getPath(city) {
        if (!city) return;
        let resort = this.getResort(city);
        if (resort) {
            return resort.path;
        }
        return;
    }

    getSearchStrg(city) {
        if (!city) return;
        let resort = this.getResort(city);
        if (resort) {
            return resort.searchStrg;
        }
        return;
    }

    getSpeechstart(city) {
        if (!city) return;
        let resort = this.getResort(city);
        if (resort && resort.speechstart) {
            return resort.speechstart;
        }
        return;
    }

    getSpeechskiresort(city) {
        if (!city) return;
        let resort = this.getResort(city);
        if (resort && resort.speechskiresort) {
            return resort.speechskiresort;
        }
        return;
    }

}

module.exports = WebDataContainer;