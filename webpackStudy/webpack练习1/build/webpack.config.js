const { merge } = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const devConfig = require('./webpack.dev.conf.js')
const prodConfig = require('./webpack.prod.conf.js')
const pathResolve = require('./pathResolve.js')
const baseConfig = {
  entry: pathResolve('./src/index.js'),
  output: {
    filename: 'static/js/index.js',
    path: pathResolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.vue?$/,
        exclude: /node_modules/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: /node_modules/,
        type: 'asset/inline',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
        // generator: {
        //   filename: 'static/images/[name][ext]',
        // },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: 'static',
          globOptions: {
            // dot: true,
            // gitignore: true,
            // 这个过滤调less文件
            ignore: ['**/less/*'],
          },
        },
      ],
    }),
  ],
}

module.exports = function(env) {
  return env.deveploment ? merge(devConfig, baseConfig) : merge(prodConfig, baseConfig)
}
