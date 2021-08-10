const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    filename: 'static/js/index.js',
    path: `${__dirname}/dist`,
    // publicPath: `/base` // cdn主输出口
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
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
        test: /\.(jpe?g|png|gif)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          filename: 'static/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CleanWebpackPlugin(),
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
  resolve: {
    extensions: ['*', '.js', 'jsx', '.ts', 'tsx'],
  },
  devServer: {
    hot: true,
    compress: true, //
    contentBase: './',
    // contentBase: `${__dirname}`, // 必须访问http://192/168.144.210:8080/base <script defer="" src="/base/static/js/index.js"></script>
    // 确保 publicPath 总是以斜杠("/")开头和结尾。
    // publicPath: `${__dirname}/base`, // 默认本地服务是从/开始的是和outputpath路径一致比如改成/base那么server输出路径为/base下静态资源文件 服务器地址+ pubilc地址生成地址
  },
}
