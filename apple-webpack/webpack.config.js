const webpack = require('webpack')
const path = require('path');

module.exports({
    //入口
    entry: './src/main.js',
    //出口
    output: {
        filename: 'build.js',
        path: path.resolve( __dirname,'./dist')
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'},
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.(png|jpg|gif|svg)$/, use: 'file-loader'}
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
    ]
})