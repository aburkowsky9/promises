/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (error, data) => {
    // console.log('DATA: ', data.split('\n'));
    if (error) {
      callback(error);
    } else {
      var firstLine = data.split('\n')[0];
      callback(null, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  //console.log('HEAD: ', request.head(url));
  request.get(url, (error, statusCode) => {
    // console.log('STATUS: ', statusCode);
    if (error) {
      callback(error);
    } else {
      callback(null, statusCode.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
