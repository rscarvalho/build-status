'use strict'; // eslint-disable-line

import path from 'path';
import electron from 'electron';
import isRenderer from 'is-electron-renderer';
import Application from './Application';

const EVENTS = {
  OPEN_PROJECTS_WINDOW: 'window-open:projects'
};

const OPEN_WINDOWS = {};

function registerListeners() {
  const {app, BrowserWindow} = electron;

  app.on(EVENTS.OPEN_PROJECTS_WINDOW, () => {
    if (!OPEN_WINDOWS.projectsWindow) {
      try {
        const win = new BrowserWindow({width: 800, height: 600});
        win.loadURL(`file://${path.join(Application.root(), 'html', 'projects.html')}`);
        win.on('close', () => {
          OPEN_WINDOWS.projectsWindow = null;
        });
        OPEN_WINDOWS.projectsWindow = win;
      } catch (e) {
        console.error(e, e.backtrace);
      }
    } else {
      OPEN_WINDOWS.projectsWindow.focus();
    }
  });
}

if (!isRenderer) {
  registerListeners();
}

export default {
  openProjectsWindow() {
    let app;
    if (isRenderer) {
      app = electron.remote.app;
    } else {
      app = electron.app;
    }

    app.emit(EVENTS.OPEN_PROJECTS_WINDOW);
  }
};
