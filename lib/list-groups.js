var request = require("request"),
  config = require('../config'),
  options = {
    method: 'GET',
    url: 'https://api.cometchat.com/v1/groups',
    headers:
     {
       'content-type': 'application/json',
       appid: config.appid,
       apikey: config.apikey
     }
   };

module.exports = function (args) {
  request(options, function (error, response, body) {
    console.log(JSON.parse(body).data);
  });
};
