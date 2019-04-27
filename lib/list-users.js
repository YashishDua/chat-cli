var request = require("request"),
  config = require('../config'),
  options = {
    method: 'GET',
    url: 'https://api.cometchat.com/v1/users',
    headers: {
      appid: config.appid,
      apikey: config.apikey
    }
  };

module.exports = function () {
  request(options, function (error, response, body) {
    console.log(JSON.parse(body).data);
  });
};
