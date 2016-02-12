'use strict';

var menubar = require('menubar');

var mb = menubar();

mb.on('ready', function onReady() {
  console.log('app is ready');
});
