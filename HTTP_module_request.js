var getModule = require('./HTTP_Module');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getModule(requestOptions, function(appendChunkOfData){
  console.log(appendChunkOfData);
});