

module.exports = function getHTML(options, callback) {
  var https = require('https');
  https.get(options, function (response) {
    var appendChunkOfData = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
      appendChunkOfData += data;
    });
    response.on('end', function() {
      callback(appendChunkOfData);
    });
  });
};