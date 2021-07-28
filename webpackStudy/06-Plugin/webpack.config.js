
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'js/index.js',
        path: `${__dirname}/dist`
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        // 设置全局变量
        new webpack.DefinePlugin({
            BASE_URL: './',
            TITLE: JSON.stringify('测试项目'),
            // CONFIG_URL: JSON.stringify(envConfig)
        }),
        // 复制或创建html模板
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        // 清除上次打包文件
        new CleanWebpackPlugin(),
        // 赋值文件，从哪复制到哪，默认打包输出路径
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    globOptions: {
                        ignore: [
                            "**/test.txt",
                            "**/index.html"
                        ]
                    }
                }
            ]
        }),
        // 处理css转换为单独css文件
        new MiniCssExtractPlugin()
    ]
}