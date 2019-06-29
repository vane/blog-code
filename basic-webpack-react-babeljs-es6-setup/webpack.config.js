const webpack = require('webpack');
const Copy = require('copy-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.js',
    library: 'Demo',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  plugins: [
    new Copy([
      {from: 'html'},
    ]),
  ]
}