#! /usr/bin/env node
const execSync = require('child_process').execSync;
const execSyncOptions = {encoding: 'utf-8'};
const releaseType = process.argv[process.argv.length - 1].toLowerCase();

if (['patch', 'minor', 'major'].indexOf(releaseType) < 0) {
  throw('Wrong type of release provided. You must specify a patch, minor, or major release.');
  process.exit(1);
}

const versionTag = execSync(`npm version ${releaseType}`, execSyncOptions).trim(); 
console.log(versionTag);
process.exit()

[
  `npm version ${releaseType}`,
  'git push origin master --tags',
  'npm publish' 
].forEach((cmd) => {
  console.log(execSync(cmd, execSyncOptions));
});
