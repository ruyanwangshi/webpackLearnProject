const webpack = require('webpack'); // 访问webpack运行时
const configuration = require('./webpack.config');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const compiler = webpack(configuration);

new webpack.PrefetchPlugin().apply(compiler);
new HtmlWebpackPlugin().apply(compiler);

compiler.run(function(err, stats) {

})