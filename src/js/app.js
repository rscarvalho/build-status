'use strict';

const path = require('path');
const menubar = require('menubar');

const ROOT_DIR = path.dirname(__dirname);

class Application {
  constructor() {
    this.menubar = null;
  }

  static start() {
    this.menubar = menubar({
      dir: ROOT_DIR,
      index: `file://${ROOT_DIR}/html/menubar.html`,
      'preload-window': true
    });

    this.menubar.on('ready', () => {
      console.log(`running app. node ${process.version}`);
    });
  }
}

module.exports = Application;
