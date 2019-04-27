const lib = require("../../lib")

exports.command = 'list-users';
exports.desc = 'List Users';
exports.handler = (args) => {
  lib.listUsers();
};
