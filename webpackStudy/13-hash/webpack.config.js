const pathResolve = require('./pathResolve/index.js')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    main: './src/main.js',
  },
  output: {
    path: pathResolve('./dist'),
    filename: 'js/[name].[contenthash:8].build.js',
    // chunkFilename: 'js/[name].[hash:8].build.js',
    // publicPath: "",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.html',
    }),
    new MiniCssPlugin({
      filename: 'css/[name].[chunkhash:8].css',
    }),
  ],
}
