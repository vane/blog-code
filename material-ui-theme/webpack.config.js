const webpack = require('webpack');
const Copy = require('copy-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.js',
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new Copy([
      {from: 'html'},
    ]),
  ]
}