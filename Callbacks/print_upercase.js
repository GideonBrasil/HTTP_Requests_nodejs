var getModule = require('../HTTP_Module');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function htmlUppercase(appendChunkOfData){
  var UppercaseString = appendChunkOfData.toUpperCase();
  console.log(UppercaseString);
}

getModule(requestOptions, htmlUppercase);