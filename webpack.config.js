const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './client/index.tsx',
    output: {
        path: './build/client',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', '!css!postcss!sass'),
                include: path.join(__dirname, 'client', 'src')
            },
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader?configFileName=client.tsconfig.json',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html',
                include: path.join(__dirname, 'client', 'src')
            }
        ]
    },
    postcss: [autoprefixer()],
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/src/views/index.html'
        }),
        new ExtractTextPlugin('[name].css')
    ],
    resolve: {
        extensions: ['', '.ts', '.tsx', '.scss', '.html', '.js'],
        modulesDirectories: ['src', 'node_modules']
    }
}
