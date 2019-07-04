const webpack = require('webpack');
const Copy = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.js',
    library: 'Demo',
    libraryTarget: 'umd',
  },
  devServer: {
    contentBase: __dirname + '/build',
    compress: false,
    port: 9000
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
