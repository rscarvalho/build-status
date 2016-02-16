import WindowManager from '../../src/js/WindowManager';
import {expect} from 'chai';
import sinon from 'sinon';
import {app} from 'electron';

describe('WindowManager', function() {
  beforeEach(function() {
    sinon.spy(app, 'emit');
  });

  afterEach(function() {
    app.emit.restore();
  });

  it('emits event to app to open the projects window', function() {
    expect(WindowManager).not.to.be.null;
    WindowManager.openProjectsWindow();

    expect(app.emit).to.have.been.calledWith('window-open:projects');
  });
});
