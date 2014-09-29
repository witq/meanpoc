module.exports = function(grunt) {

  // This file is here just to kick-start Grunt, all the task configs
  // are in the config/grunt directory.

  var path            = require('path'),
    loadGruntConfig   = require('load-grunt-config'),
    timeGrunt         = require('time-grunt');

  loadGruntConfig(grunt, {
    configPath: path.join(process.cwd(), 'config/grunt'),
    jitGrunt: true
  });

  timeGrunt(grunt);

};
