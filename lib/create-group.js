var request = require('request'),
  config = require('../config'),
  options = {
    method: 'POST',
    url: 'https://api.cometchat.com/v1/groups',
    headers:
     {
       'content-type': 'application/json',
       appid: config.appid,
       apikey: config.apikey
     }
   };

module.exports = function (args) {
  options.body = JSON.stringify(
    {
      'guid': args.id,
      'name': args.name,
      'type': args.type
    }
  );

  request(options, function (error, response, body) {
    body = JSON.parse(body);
    if (body.error !== null) {
      console.log(body.error);
    }
    else {
      console.log(`Group ${body.data.name} created successfully`);
      if (body.data.hasJoined) {
        console.log('Entered Group')
      }
    }
  });
};
