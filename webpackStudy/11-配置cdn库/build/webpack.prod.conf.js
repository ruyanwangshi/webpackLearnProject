const TerserPlugin = require('terser-webpack-plugin')
const PurifycssPlugin = require('purgecss-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const resolvePath = require('./resolvePath')
const glob = require('glob')
module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      maxSize: 40000,
      cacheGroups: {
        vendorDefault: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'static/js/[name].vendor.js',
        },
        default: {
          minChunks: 2,
          filename: 'static/js/[name].common.js',
        },
      },
    },
    runtimeChunk: true
  },
  plugins: [
    new PurifycssPlugin({
      paths: glob.sync(`${resolvePath('src')}/**/*`,  { nodir: true })
      // paths: glob.sync(`${resolvePath('./src')}/**/*`)
    })
  ]
}
