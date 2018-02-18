# Packrel  
> Easy, cross-OS commandline utility for npm and git semver-based version release   
[![npm](https://img.shields.io/npm/dt/packrel.svg)]() [![npm](https://img.shields.io/npm/v/packrel.svg)]()
  
## Install  
  
```  
npm install -g packrel  
```  
  
## Usage  
  
```
packrel <patch|minor|major>  
```  
  
This will:  
- bump the version in your package.json according to the type of release you've specified.  
- push a commit to your master branch of your remote repository with the new release tag  
- publish the new package version on npm  
  

