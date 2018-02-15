#! /usr/bin/env node
const execSync = require('child_process').execSync;
const execSyncOptions = {encoding: 'utf-8'};
const releaseType = process.argv[process.argv.length - 1].toLowerCase();

if (['patch', 'minor', 'major'].indexOf(releaseType) < 0) {
  throw('Wrong type of release provided. You must specify a patch, minor, or major release.');
  process.exit(1);
}

execSync(`npm version ${releaseType}`, execSyncOptions)
execSync(`git tag ${require('./package.json').version.trim()}`, execSyncOptions)
execSync('git push origin master --tags', execSyncOptions)
execSync('npm publish', execSyncOptions)
