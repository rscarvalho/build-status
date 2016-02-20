require('babel-register')({
  presets: ['es2015']
});

require('./src/js/Application').default.start();
