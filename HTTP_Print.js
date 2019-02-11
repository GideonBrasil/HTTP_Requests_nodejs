var https = require('https');
// Utilize the https library to GET a given URL.
function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  
https.get(requestOptions, function (response) {
    var appendChunkOfData = '';
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
  
    // the callback is invoked when a `data` chunk is received,
    // the data is then passed into my variable appendChunksOfData
    response.on('data', function (data) {
      appendChunkOfData += data;
      // console.log(appendChunkOfData + '\n')
    });
  
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log(appendChunkOfData + '\n')
      console.log('Response stream complete. \n');
    });
  
  });

}
getAndPrintHTML();
