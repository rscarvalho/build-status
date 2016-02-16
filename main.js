require('babel-register')({
  presets: ['es2015']
});

var Application = require('./src/js/Application').default; //.start();

Application.start();
