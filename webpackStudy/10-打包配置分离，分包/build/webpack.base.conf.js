const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaders = require('vue-loader/lib/plugin')
const { merge } = require('webpack-merge')

const devConfig = require('./webpack.dev.conf')
const prodConfig = require('./webpack.prod.conf')

const pathResolve = require('./pathResolve')
console.log(VueLoaders)

const baseConfig = {
  entry: {
  //   这样是最简单分包方式，但不建议这样进行分包不推荐使用
    index: {
      import: pathResolve('./src/index.js'),
      // dependOn: 'shared',
    },
    testIndex: {
      import: pathResolve('./src/testindex.js'),
      // dependOn: 'shared',
    },
    // shared: ['lodash','dayjs'],
  },
  // entry: pathResolve('./src/index.js'),
  output: {
    filename: 'static/js/index.[chunkhash:6].build.js',
    path: pathResolve('./dist'),
    chunkFilename: 'static/js/[name].chunk.js' // 用来设置具体的chunk分包文件名称
  },
  resolve: {
    extensions: ['*', '.js', 'ts'],
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        use: ['vue-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'pubilc',
          to: 'static',
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new VueLoaders(),
  ],
}

module.exports = (env) => {
  return env.development ? merge(baseConfig, devConfig) : merge(baseConfig, prodConfig)
}
