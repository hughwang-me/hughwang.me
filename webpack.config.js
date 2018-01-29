const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/root.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'js/bundle-[name]-[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname , 'src'),
                exclude: path.resolve(__dirname , 'node_modules'),
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'hughwang.me',
            template: 'root.html'
        })
    ]
};