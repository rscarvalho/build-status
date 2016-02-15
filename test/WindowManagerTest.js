/* global describe, it */
/* eslint no-var:0, func-names:0, prefer-arrow-callback:0 */

var assert;
var WindowManager;
require('../tests');
assert = require('assert');
WindowManager = require('../src/js/WindowManager');

describe('WindowManager', function() {
  it('exists', function() {
    assert.notEqual(null, WindowManager);
  });
});
