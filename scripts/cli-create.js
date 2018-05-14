#!/usr/bin/env node

const path = require('path');
const program = require('commander');

program
  .command(
    'newModule <name> [otherProps...]',
    'create a new component in components folder.',
  )
  .option('-p --path <path>', 'custom create path.')
  .action(targetName => {
    const targetPath =
      program.path || path.resolve(__dirname, '..', 'components');
    const name = `${targetName.charAt(0).toUpperCase()}${targetName.slice(1)}`;

    require('./create')({
      name,
      targetPath,
    });
  });

program.parse(process.argv);
