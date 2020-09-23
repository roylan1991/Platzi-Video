const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const Webpack = require('webpack');

require('dotenv').config;
const isDev = (process.env.ENV === 'development');

const entry = ['./src/frontend/index.js'];

if (isDev) {
    entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true');
}

module.exports = {
    entry: entry,
    mode: process.env.ENV,
    output: {
        path: path.resolve(__dirname, 'src/server/public'),
        filename: 'assets/app.js',
        publicPath: "/",
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        'loader': 'file-loader',
                        options: {
                            name: 'assets/images/[hash].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        isDev ? new Webpack.HotModuleReplacementPlugin() : () => { },
        new MiniCssExtractPlugin({
            filename: 'assets/app.css',
        })
    ]
};