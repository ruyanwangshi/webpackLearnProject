const { merge } = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtraactPlugin = require('mini-css-extract-plugin')
// const happypack = require('./happpack') // 如果是小项目使用多进程插件打包会变慢

const devConfig = require('./webpack.dev.conf.js')
const prodConfig = require('./webpack.prod.conf.js')

const pathResolve = require('./pathResolve.js')
const baseConfig = (env) => {
  return {
    entry: pathResolve('./src/index.js'),
    output: {
      // hash只要是打包，hash值都会发生相应变化contenthash只有当前模块发生变化时候对应打包后的模块包才会发生对应的变化
      filename: 'static/js/[name].[contenthash:6].js',
      path: pathResolve('./dist'),
      chunkFilename: 'static/js/[name].[contenthash:6].chunk.js', // 主要用于chunk文件名称，例如异步加载的模块
    },
    module: {
      rules: [
        // {
        //   test: /\.[jt]sx?$/,
        //   exclude: /node_modules/,
        //   use: [
        //     {
        //       loader: 'happypack/loader?id=happyBabel',
        //     },
        //   ],
        // },
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
            env.deveploment ? 'style-loader' : MiniCssExtraactPlugin.loader,
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
            env.deveploment ? 'style-loader' : MiniCssExtraactPlugin.loader,
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
              maxSize: 5 * 1024,
            },
          },
          // generator: {
          //   filename: 'static/images/[name][ext]',
          // },
        },
      ],
    },
    plugins: [
      // happypack(),
      
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
      !env.deveploment && new MiniCssExtraactPlugin({
        filename: 'static/css/[name].css'
      }),
    ],
  }
}

module.exports = function(env) {
  return env.deveploment ? merge(devConfig, baseConfig(env)) : merge(prodConfig, baseConfig(env))
}
