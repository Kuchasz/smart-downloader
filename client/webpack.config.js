const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app.tsx',
  output:{
    path: './build',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style','!css!postcss!sass'),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  postcss: [autoprefixer()],
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html'
    }),
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: ['', '.ts', '.tsx', '.scss', '.html', '.js'],
    modulesDirectories: ['src', 'node_modules']
  }
}
