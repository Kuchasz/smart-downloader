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
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract('style', '!css!postcss!sass'),
                include: path.resolve('client/src')
            },
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader?configFileName=client.tsconfig.json',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html',
                include: path.resolve('client/src')
            }
        ]
    },
    postcss: [autoprefixer()],
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('/src/views/index.html')
        }),
        new ExtractTextPlugin('[name].css')
    ],
    resolve: {
        extensions: ['', '.ts', '.tsx', '.scss', '.html', '.js']
    }
};
