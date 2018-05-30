/* eslint no-console:0 */

const fs = require('fs');
const path = require('path');
const execa = require('execa');
const chalk = require('chalk');
const shell = require('shelljs');

function handleFilePaths(finallyPath, name) {
  fs.readdir(finallyPath, (err, files) => {
    if (err) throw new Error(err);

    files.forEach(item => {
      const filePath = path.join(finallyPath, item);

      isFolder(filePath).then(result => {
        if (result) {
          handleFilePaths(filePath, name);
        } else {
          handleFile(filePath, name);
        }
      });
    });
  });
}

function isFolder(pathName) {
  return new Promise((resolve, reject) => {
    fs.stat(pathName, (err, stats) => {
      if (err) reject(err);

      resolve(stats.isDirectory());
    });
  });
}

function handleFile(filePath, name) {
  if (filePath.indexOf('template') >= 0) {
    return replace(filePath, name).then(() => {
      rename(filePath, filePath.replace('template', name));
    });
  }

  if (
    filePath.match(/demo\/.+(js|html)?$/) ||
    filePath.match(new RegExp(`${name}(\\/|\\\\)index.js`)) ||
    filePath.indexOf('README.md') >= 0
  ) {
    return replace(filePath, name);
  }
}

function rename(oldPath, newPath) {
  return new Promise((resolve, reject) => {
    fs.rename(oldPath, newPath, err => {
      if (err) reject(err);

      resolve();
    });
  });
}

function replace(filePath, name) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);

      const content = data.toString().replace(/template/g, name);
      fs.writeFile(filePath, content, err => {
        if (err) reject(err);

        resolve(filePath);
      });
    });
  });
}

module.exports = detail => {
  const { name, targetPath } = detail;
  const finallyPath = path.join(targetPath, name);

  shell.rm(finallyPath);
  shell.mkdir(finallyPath);
  shell.cp('-r', path.resolve(__dirname, '..', 'template', '*'), finallyPath);
  handleFilePaths(finallyPath, name);
  console.log(
    chalk.green(
      `✅  Create new Module SUCCESS! path: ${path.join(targetPath, name)}`,
    ),
  );

  execa('yarn', ['format:js'])
    .then(() => {
      console.log(chalk.green(`✅  Format js SUCCESS!`));
    })
    .catch(err => {
      console.error(chalk.red(`❌  ${err}`));
    });
};
