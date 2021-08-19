const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtraactPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolvePath = require('./resolvePath')

const devConfig = require('./webpack.dev.conf')
const prodConfig = require('./webpack.prod.conf')

const baseConfig = (env) => {
  return {
    entry: resolvePath('./src/index.js'),
    output: {
      filename: 'static/js/[name].[contenthash:6].js',
      path: resolvePath('./dist'),
      chunkFilename: 'static/js/[name].[contenthash:6].chunk.js',
    },
    resolve: {
      alias: {
        '@': resolvePath('./src'),
      },
      extensions: ['*', '.js', '.ts', '.tsx', '.vue'],
    },
    // externals:{
    //   Vue: 'Vue'
    // },
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: ['vue-loader'],
        },
        {
          test: /\.[jt]sx?$/,
          exclude: /(node_modules|static)/,
          use: ['babel-loader'],
        },
        {
          test: /\.(jpe?g|png|gif)/,
          type: 'asset/inline',
          exclude: /node_modules/,
          parser: {
            dataUrlCondition: {
              maxSize: 5 * 1024,
            },
          },
        },
        {
          test: /\.(eot|ttf|svg|woff)$/,
          type: 'asset/resource',
          exclude: /node_modules/,
          generator: {
            filename: 'static/font/[name][contnethash:6][ext]',
          },
        },
        {
          test: /\.css/,
          exclude: /node_modules/,
          use: [
            env.development ? 'style-loader' : MiniCssExtraactPlugin.loader,
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
          test: /\.less/,
          exclude: /node_modules/,
          use: [
            env.development ? 'style-loader' : MiniCssExtraactPlugin.loader,
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
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        TITLE: JSON.stringify('hello vue'),
      }),
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: resolvePath('pubilc'),
            to: 'static',
            // globOptions: {
            //   // dot: true,
            //   // gitignore: true,
            //   // 这个过滤调less文件
            //   ignore: ['**/less/*'],
            // },
          },
        ],
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      !env.deveploment &&
        new MiniCssExtraactPlugin({
          filename: 'static/css/[name].css',
        }),
    ],
  }
}

module.exports = (env) => {
  return env.development ? merge(baseConfig(env), devConfig) : merge(baseConfig(env), prodConfig)
}
