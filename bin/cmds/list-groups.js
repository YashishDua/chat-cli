const lib = require("../../lib")

exports.command = 'list-groups';
exports.desc = 'List Groups';
exports.handler = (args) => {
  lib.listGroups(args);
};
