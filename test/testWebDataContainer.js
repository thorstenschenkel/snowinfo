const WebDataContainer = require('../src/WebDataContainer');

let bergfexContainer = new WebDataContainer();
bergfexContainer.push('Bergeralm', 'www.bergfex.at', '/tirol/schneewerte/', ['Bergeralm', 'Steinach', 'Brenner'], 'Auf der');

bergfexContainer.pushObject({
    city: 'Fendels',
    host: 'www.bergfex.at',
    path: '/tirol/schneewerte/',
    search: ['Fendels', 'Ried', 'Prutz'],
    speechstart: 'In'
});

console.log('resort: ', bergfexContainer.getResort('Bergeralm'));
console.log('resort: ', bergfexContainer.getHost('Bergeralm'));

console.log('resort: ', bergfexContainer.getResort('Fendels'));
console.log('resort: ', bergfexContainer.getHost('Fendels'));
console.log('resort: ', bergfexContainer.getPath('Fendels'));
console.log('resort: ', bergfexContainer.getSearch('Fendels'));
console.log('resort: ', bergfexContainer.getSpeechstart('Fendels'));
console.log('resort: ', bergfexContainer.getSpeechskirresort('Fendels'));
