const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
}

module.exports = {
    externals: {
        path: PATH
    },
    entry: {
        app: PATH.src
    },
    output: {
        filename: `${PATH.assets}js/[name].js`,
        path: PATH.dist,
        publicPath: '/'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, 
        // {
        //     test: /\.(png|jpg|svg)$/,
        //     use: [
        //     {
        //         loader: 'file-loader',
        //         options: {
        //         name: 'images/[name].[ext]',
        //         },
        //     },
        //     ],
        // },
        {
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                { loader: "css-loader", options: {sourceMap: true} },
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true}
                },
                { loader: "sass-loader", options: {} }  
            ]
        }]
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATH.assets}css/[name].css`
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATH.src}/index.html`,
            filename: './index.html'
        })
    ]
}