import {BrowserWindow} from 'remote';
import path from 'path';
import React from 'react';
import Application from '../Application';

export default React.createClass({
  handleProjectWindowOpenClick() {
    const window = new BrowserWindow({width: 800, height: 600});
    window.loadURL(`file://${path.join(Application.ROOT_DIR, 'html', 'projects.html')}`);
  },

  render() {
    return (
      <div>
        <h3>build-status</h3>
        <button onClick={this.handleProjectWindowOpenClick}>Open Projects Window</button>
      </div>
    );
  }
});
