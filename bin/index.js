#!/usr/bin/env node

const argv = require('yargs')
  .commandDir('cmds')
  .help()
  .argv
