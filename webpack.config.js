const webpack = require('webpack'); // eslint-disable-line
const path = require('path');

module.exports = {
  target: 'electron',
  context: path.join(__dirname, 'src', 'js'),
  entry: {
    menubar: './bundles/menubar'
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].entry.js',
    publicPath: 'http://localhost:8080/build/'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
};
