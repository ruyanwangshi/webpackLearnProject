const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
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
}
