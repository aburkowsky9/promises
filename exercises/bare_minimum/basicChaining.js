/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var gitHubRequest = require('./promisification.js');
var getProfileUsername = require('./promiseConstructor.js');
Promise.promisifyAll(fs);



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return getProfileUsername.pluckFirstLineFromFileAsync(readFilePath)
    .then((username)=>{
      if (!username) {
        throw new Error('Username not found!');
      } else {
        return gitHubRequest.getGitHubProfileAsync(username);
      }
    })
    .then((reqBody)=>{
      if (!reqBody) {
        throw new Error('No request body!');
      } else {
        reqBody = JSON.stringify(reqBody);
        return fs.writeFileAsync(writeFilePath, reqBody, 'utf8');
      }
    });
  // TODO
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
