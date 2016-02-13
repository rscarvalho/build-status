/* eslint-disable */
'use strict';

const path = require('path');
const menubar = require('menubar');

const ROOT_DIR = path.dirname(__dirname);

class Application {
  constructor() {
    this.menubar = menubar({
      dir: ROOT_DIR,
      index: `file://${ROOT_DIR}/html/menubar.html`,
      tooltip: 'build-status',
      'preload-window': true
    });

    this.menubar.on('ready', () => {
      console.log(`running app. node ${process.version}`);
    });
  }

  static start() {
    if (!Application.INSTANCE) {
      Application.INSTANCE = new Application();
    }
  }
}

Application.ROOT_DIR = ROOT_DIR;

module.exports = Application;