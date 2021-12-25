const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'GeekBrains Shop JS2',
            template: path.resolve(__dirname, './public/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules'
        },

            {
                test: /\.less$/,
                use:  [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    grid: true//,
                                    //browsers:['ie >= 10', 'last 2 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
}