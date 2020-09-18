const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');

module.exports = {
    entry: ['./src/frontend/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/app.js',
        publicPath: "/",
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        'loader': 'file-loader',
                        options: {
                            name: 'assets/images/[hash].[ext]'
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
        new Webpack.HotModuleReplacementPlugin(),       
        new MiniCssExtractPlugin({
            filename: 'assets/app.css'
        })
    ]
};