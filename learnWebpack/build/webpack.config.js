const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

// 配置vue-loader用于解析.vue文件
// vue-template-compiler用于编译模板
// 引入插件会根据package.json中的main属性来进行查找对应文件路径
// 例如
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const { VueLoaderPlugin } = require('vue-loader')
// console.log(VueLoaderPlugin)

module.exports = {
  mode: 'development',
  // 在入口处添加对应转换配置
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/main.js')],
  // entry: [path.resolve(__dirname, '../src/main.js')],
  // 多个模块入口
  // entry: {
  //   // index: path.resolve(__dirname, '../src/main.js'),
  //   // home: path.resolve(__dirname, '../src/home.js'),
  //   index: path.resolve(__dirname, '../src/main.js'),
  // },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html',
      // chunks: ['index'],
    }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../home.html'),
    //   filename: 'home.html',
    //   chunks: ['home'],
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash:8].css', // 输出文件名称
      chunkFilename: '[id].css', // 源文件名称
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // style-loader除了css-loader，和其他loader不能混用
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.jpe?g|png|gif$/,
        // type: 'asset/resource', // 相当于file-loader
        // generator: {
        //   filename: 'img/[name]-[hash:8].[ext]',
        // },
        // type: 'asset/inline', // 全部都是用url-loader
        type: 'asset',
        generator: {
          // filename: 'img/[name]-[hash:8].[ext]',
          filename: 'assets/image/[name][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 如果一个模块源码小于maxSize,那么模块会被当做一个Base64来解析
          },
        },
      },
      // 使用babel转译js文件 兼容更多的环境
      // 注意babel-loader与bable-core版本对应关系
      // babel-loader 8.x对应babel-core 7.x
      // babel-loader 7.x对应babel-core 6.x
      // babel-loader很慢所以解析文件不要设置很多
      // 但是只能讲部分的语法进行转换，不包含（promise、generator、set、maps、proxy）
      // 所以需要借助babel-polyfill来帮助进行转换
      {
        test: /\.js$/,
        use: {
          // loader: 'babel-loader?cacheDirectory=true', // cacheDirectory默认为false，设置为true时可以自动缓存编译文件，提高编译速度
          loader: 'babel-loader', // cacheDirectory默认为false，设置为true时可以自动缓存编译文件，提高编译速度
          options: {
            presets: [
              '@babel/preset-env',
              // {
              //   targets: ['>1%', 'last 2 version', 'not dead'],
              // },
            ],
          },
        },
        exclude: /node_modules/,
      },

      // 解析vue文件 npm i -D vue-loader vue-template-compiler vue-style-loader
      // cnpm i -S vue
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: 'html-loader'
      //   },
      // },
    ],
  },
  resolve: {
    alias: {
      // vue$代表精确匹配
      // import Vue from 'vue';正常导入的找不到路径，必须配置对应路径别名映射。对应package.json中的main：映射路径
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, '../src'),
    },
    // 备注：使用此选项，会覆盖默认数组，这就意味着 webpack 将不再尝试使用默认扩展来解析模块。对于使用其扩展导入的模块，例如，import SomeFile from "./somefile.ext"，要想正确的解析，一个包含“*”的字符串必须包含在数组中。
    extensions: ['*', '.js', '.json', '.vue'],
  },
  // htmlLoader: {
  //   ignoreCustomFragments: [/\{\{.*?}}/],
  //   root: path.resolve(__dirname, 'assets'),
  //   attrs: ['img:src', 'link:href']
  // },
  devServer: {
    // 提供静态文件
    //   contentBase: path.join(__dirname, 'public')
    contentBase: '../dist',
    port: 4000, // 开发服务端口号
    hot: true, // 启用热重载
  },
}
