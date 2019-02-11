var getModule = require('../HTTP_Module');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function htmlLowercase(appendChunkOfData){
  var lowercaseString = appendChunkOfData.toLowerCase();
  console.log(lowercaseString);
}

getModule(requestOptions, htmlLowercase);