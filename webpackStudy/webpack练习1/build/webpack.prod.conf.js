// 该插件使用 terser 来压缩 JavaScript。
const TerserPlugin = require('terser-webpack-plugin')
const comporessionPlugin = require('compression-webpack-plugin') // 对文件进行gzip压缩
const webpack = require('webpack')

// console.log(new VisualizerPlugin())
module.exports = {
  mode: 'production',
  // optimization: {
  //   minimize: true, // 告知 webpack 使用 TerserPlugin 或其它在 optimization.minimizer 定义的插件压缩 bundle。
  //   minimizer: [
  //     new TerserPlugin({
  //       test: /\.js(\?.*)?$/i, // 匹配对应需要压缩的文件
  //       exclude: /[\//node_modules\//]/,
  //       terserOptions: {
  //         mangle: true, // 混淆，默认为true
  //         compress: {
  //           drop_console:true // 移除所有console函数
  //         },
  //       },
  //       extractComments: false, // 不要对应注释分离文件
  //     }),
  //   ],
  // },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      // maxSize: 40000, // 如果大于最大阀值必须得再次分包
      cacheGroups: {
        chunksVendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'static/js/[name].vendors.js',
        },
      },
    },
    runtimeChunk: true,
  },
  plugins: [
    new comporessionPlugin({
      test: /\.js$|\.html$|\.css/, // 匹配文件名
      threshold: 10240, // 对超过10kb的数据进行压缩
      deleteOriginalAssets: true, // 是否删除原文件
    }),
  ],
}
