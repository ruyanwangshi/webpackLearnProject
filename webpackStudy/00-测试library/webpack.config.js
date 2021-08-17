const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        filename: 'library.js',
        path:`${__dirname}/dist`,
        // library: 'TestLibrary' // output.library 配置项暴露从入口导出的内容 但是这种方式只能通过script标签进行使用，
        // 作为库应该对于导入的方式要有一定的兼容；
        library: {
            name: 'TestLibrary',
            type: 'umd' // amd cmd兼容script标签也可以进行导入
        }
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}