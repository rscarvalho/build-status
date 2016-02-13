/* eslint-disable */
'use strict';

import path from 'path'
import menubar from 'menubar'
import {BrowserWindow, app} from 'electron';
import isRenderer from 'is-electron-renderer';
import './WindowManager';

const ROOT_DIR = path.dirname(__dirname);

export default class Application {
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

  static getCurrent() {
    return Application.INSTANCE;
  }

  static root() {
    return ROOT_DIR;
  }
}
