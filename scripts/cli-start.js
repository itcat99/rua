#!/usr/bin/env node

/* eslint no-console:0 */
const fs = require('fs');
const path = require('path');
const program = require('commander');
const chalk = require('chalk');

function hasComponent(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) reject(err);

      resolve(stats);
    });
  });
}
program
  .option('<name>', 'Start component development.')
  .option('-p --port', 'Set the server port number. default:8080')
  .action(async (targetName, port) => {
    const name = `${targetName.charAt(0).toUpperCase()}${targetName.slice(1)}`;
    if (typeof port !== 'string') {
      port = 8080;
    }

    const componentFolderPath = path.resolve(
      __dirname,
      '..',
      'components',
      name,
    );

    try {
      await hasComponent(componentFolderPath);

      require('./start')({
        targetPath: path.join(componentFolderPath, 'demo'),
        port,
      });
    } catch (err) {
      console.log(chalk.red('======= Error Code ======='));
      console.error(err.toString());
      console.log(chalk.red('===== Error Code End ====='));
    }
  });

program.parse(process.argv);
