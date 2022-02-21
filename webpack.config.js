const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: { 
        main: './js/index.js',
    },
    output: { 
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs')
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.jpg', '.css', '.ttf'],
        alias: {
            '@': path.resolve(__dirname, 'src'),           
            '@js': path.resolve(__dirname, 'src/js'),
            '@img': path.resolve(__dirname, 'src/img'),
            '@fonts': path.resolve(__dirname, 'src/fonts'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            },
        ]
    }
}