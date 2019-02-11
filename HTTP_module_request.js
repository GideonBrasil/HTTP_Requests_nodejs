var getModule = require('./HTTP_Module');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function callback(appendChunkOfData){
  console.log(appendChunkOfData);
}

getModule(requestOptions, callback);
