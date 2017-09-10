const BergfexContainer = require('../src/BergfexContainer');

let bergfexContainer = new BergfexContainer();


console.log('resort: ', bergfexContainer.getResort('Bergeralm'));
console.log('resort: ', bergfexContainer.getHost('Bergeralm'));

console.log('resort: ', bergfexContainer.getResort('Fendels'));
console.log('resort: ', bergfexContainer.getHost('Fendels'));
console.log('resort: ', bergfexContainer.getPath('Fendels'));
console.log('resort: ', bergfexContainer.getSearch('Fendels'));
console.log('resort: ', bergfexContainer.getSpeechstart('Fendels'));
console.log('resort: ', bergfexContainer.getSpeechskirresort('Fendels'));

