const lib = require("../../lib")

exports.command = 'create-group';
exports.desc = 'Create Group';
exports.handler = (args) => {
  lib.createGroup(args);
};

exports.builder = function (yargs) {
  return yargs.options({
    id: {
      describe: 'Unique identifier for group',
      type: 'string',
      nargs: 1,
      demand: true,
      demand: 'id is required',
    },
    name: {
      describe: 'Name of group',
      type: 'string',
      nargs: 1,
      demand: true,
      demand: 'name is required',
    },
    type: {
      describe: 'Type of group - Public, Password or Private',
      type: 'string',
      default: 'public'
    }
  });
};
