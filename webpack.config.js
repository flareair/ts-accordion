const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.ts',
        vendor: ['jquery']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
