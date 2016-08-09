const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'src')
        ],
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: './src/views/index.html'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss', '.html']
  }
}
