const lib = require("../../lib")

exports.command = 'join';
exports.desc = 'Join chat room';
exports.handler = (args) => {
  console.log(args);
  lib.join();
};
