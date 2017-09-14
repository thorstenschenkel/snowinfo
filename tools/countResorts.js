// node countResorts.js
const BergfexContainer = require('../src/BergfexContainer');
const SkiinfoContainer = require('../src/SkiinfoContainer');

function count() {

    let countMap = new Map();

    let container = new BergfexContainer();
    for (let data of container.webDatas) {
        countMap.set(data.search.toString(), data);
    }

    let bergfexCount = countMap.size;

    container = new SkiinfoContainer();
    for (let data of container.webDatas) {
        countMap.set(data.search.toString(), data);
    }

    console.log('Bergfex: ' + bergfexCount);
    console.log('Total: ' + countMap.size);

}

count();
