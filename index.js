#! /usr/bin/env node
const execSync = require('child_process').execSync;
const execSyncOptions = {encoding: 'utf-8'};
const releaseType = process.argv[process.argv.length - 1].toLowerCase();
const executeAndLogCommandOutput = (cmd) => {
  const output = execSync(cmd, execSyncOptions).trim();
  console.log(output);
  return output;
}; 

if (['patch', 'minor', 'major'].indexOf(releaseType) < 0) {
  throw('Wrong type of release provided. You must specify a patch, minor, or major release.');
  process.exit(1);
}

const versionTag = executeAndLogCommandOutput(`npm version ${releaseType}`, execSyncOptions).trim();

['git push origin master', `git push origin ${versionTag}`, 'npm publish' ].forEach(executeAndLogCommandOutput);
