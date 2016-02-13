'use strict';

var path = require('path');
var menubar = require('menubar');

var instance; // eslint-disable-line
var appDir = path.dirname(__dirname);

function startApp() {
  instance = menubar({
    dir: appDir,
    index: 'file://' + appDir + '/html/menubar.html',
    'preload-window': true
  });
}

module.exports = {
  start: startApp
};
