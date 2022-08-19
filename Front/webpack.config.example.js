const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/scripts/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.js',
        publicPath: '/'
    },
    devServer: {
        static: './dist',
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: ["/node_modules/"],
            use: {
                loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
              },
        ]
    }
};