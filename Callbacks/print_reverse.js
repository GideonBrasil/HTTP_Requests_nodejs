var getModule = require('../HTTP_Module');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function htmlReverse(appendChunkOfData){
  var reverseString = appendChunkOfData.split('').reverse().join('');
  console.log(reverseString);
};

getModule(requestOptions, htmlReverse);
