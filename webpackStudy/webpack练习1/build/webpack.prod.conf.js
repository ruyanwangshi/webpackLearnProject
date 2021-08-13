// 该插件使用 terser 来压缩 JavaScript。
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true, // 告知 webpack 使用 TerserPlugin 或其它在 optimization.minimizer 定义的插件压缩 bundle。
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i, // 匹配对应需要压缩的文件
        exclude: /[\//node_modules\//]/,
        terserOptions: {
          mangle: true, // 混淆，默认为true
          compress: {
            drop_console:true // 移除所有console函数
          },
        },
        extractComments: false, // 不要对应注释分离文件
      }),
    ],
  },
}
