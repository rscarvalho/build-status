import {app} from 'remote';
import React from 'react';
import WindowManager from '../WindowManager';

export default React.createClass({
  handleProjectWindowOpenClick() {
    WindowManager.openProjectsWindow();
  },

  handleQuitClick() {
    app.quit();
  },

  render() {
    return (
      <div>
        <h3>build-status</h3>
        <button onClick={this.handleProjectWindowOpenClick}>Open Projects Window</button>
        <button onClick={this.handleQuitClick}>Quit</button>
      </div>
    );
  }
});
