const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  // entry: ['@babel/polyfill', './index.js'], // babel7 弃用@babel/polyfill
//   entry: ['core-js', './index.js'],
  entry: ['./index.js'],
  devtool: 'cheap-module-source-map',
  output: {
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //     presets: ['@babel/preset-env']
            // },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
  // 以上配置告知 webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:8080 下
  devServer: {
    contentBase: `${__dirname}/dist`,
  },
}
