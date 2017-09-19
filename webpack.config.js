const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve('./client/index.tsx'),
    output: {
        path: path.resolve('./build/client'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'}),
                include: path.resolve('client')
            },
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader?configFileName=client.tsconfig.json',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader',
                include: path.resolve('client')
            }
        ]
    },
    plugins: [
        autoprefixer,
        new HtmlWebpackPlugin({
            template: path.resolve('./client/views/index.html')
        }),
        new ExtractTextPlugin('[name].css')
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.scss', '.html', '.js']
    }
};
