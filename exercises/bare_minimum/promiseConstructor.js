/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  var promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
    // console.log('DATA: ', data.split('\n'));
      if (error) {
        reject(error);
      } else {
        var firstLine = data.split('\n')[0];
        resolve(firstLine);
      }
    });
  });
  return promise; 
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  var promise = new Promise((resolve, reject) => {
    request.get(url, (error, statusCode) => {
      if (error) {
        reject(error);
      } else {
        resolve(statusCode.statusCode);
      }
    });
  });
  return promise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
