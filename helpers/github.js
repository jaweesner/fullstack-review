const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  return new Promise((resolve, reject) => {
    request.get(options, (err, response) => {
      if (err){
        reject(err);
      }else{
        resolve(response);
      }
    })
  })
}

module.exports.getReposByUsername = getReposByUsername;