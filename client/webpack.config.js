const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output:{
    path: './build',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  postcss: [autoprefixer()],
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss', '.html']
  }
}
