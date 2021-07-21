const path = require("path");

const ConsoleLogOnBuildWebpackPlugin = require("./webpackPluginTest");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

// interface Object{
//  [entryName: string]: string | Array<string> // path 映射路径
// }

module.exports = {
  // 模式
  mode: "development",
  // 会自动启用以下插件
  //   plugin: [
  //     new webpack.NamedModulesPlugin(),
  //     new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
  //   ],
  // 模式
  //   mode: 'production',
  // 会启用以下插件
  //   plugin: [
  //     new UglifyJsPlugin(/* ... */),
  //     new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
  //     new webpack.optimize.ModuleConcatenationPlugin(),
  //     new webpack.NoEmitOnErrorsPlugin()
  //   ],
  // 入口
  // entry : string | Array<string> | Object
  // 备注: 向 entry 属性传入「文件路径(file path)数组」将创建“多个主入口(multi-main entry)”。在你想要多个依赖文件一起注入，并且将它们的依赖导向(graph)到一个“chunk”时，传入数组的方式就很有用。
  // 场景一： 分离应用app入口和第三方库文件入口
  entry: {
    index: `${__dirname}/src/index.js`,
    vendors: [`${__dirname}/src/vendors.js`],
  },
  // 场景二: 多页面应用程序
  // entry: {
  //     pageOne: './src/pageOne/index.js',
  //     pageTwo: './src/pageOne/index.js',
  // },

  // 出口
  // 可以控制webpack如何向硬盘写入编译文件，备注：即使是多个入口，但也只有一个出口配置。
  // 最简单是设置为对象，filename：用于输出文件的文件名。path：目标输出目录的绝对路径。
  output: {
    // filename: "[name].[hash:8].js", // [hash]即将被弃用具体看官网(node:1908) [DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH] DeprecationWarning: [hash] is now [fullhash] (also consider using [chunkhash] or [contenthash], see documentation for details)
    filename: "[name].js",
    path: `${__dirname}/dist`, // 输出到磁盘对应目录下的绝对路径
    // 开发环境：Server和图片都是在localhost（域名）下
    // .image {
    //     background-image: url('./test.png');
    //    }
    // 生产环境：Server部署下HeroKu但是图片在CDN上
    //   .image {
    //     background-image: url('https://someCDN/test.png');
    publicPath: "http://cdn.example.com/assets/[hash]", // 主要用于配置引入css或图片资源路径的配置
  },

  // loader 对于模块进行转换。loader可以使你在import或“加载”模块时预处理文件。
  // 使用loader有俩种方式，一种是配置方式，就是在module->rules->下面进行配置
  // 另一种是内联方式：
  // 例如：可以用import语句或任何与“import”方法同等得引用方式中执行loader。
  // 使用！将资源中得loader分开，每个部分都会相对于当前目录进行解析
  // import Styles from 'style-loader!css-loader?modules!./styles.css';
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.ts$/,
        use: ["ts-loader"], // ts-loader 必须装typescript创建一个tsconfig.json文件
      },
    ],
  },

  // 插件plugin 主要目的是用来解决loader无法实现得其他事。
  // webpack插件是一个具有apply方法得javascript对象。apply方法会被webpack compiler
  // 调用，并且在整个编译声明周期都可以访问compiler对象
  plugins: [
    new ConsoleLogOnBuildWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new webpack.ProgressPlugin(),
  ],

  resolve: {
    extensions: ["*", ".ts", "tsx", ".js"],
  },
};

// 导出配置：
// 1.导出函数
// 区分开发环境
// 参数一是环境，参数二是传递给webpack得配型项，其中包含output-path和mode等。
// module.exports = function(env, argv) {
//   return {
//     mode: env.production ? 'production' : 'development',
//     devtool: env.production ? 'source-map' : 'eval',
//   }
// }

// 2.导出Promise
// 备注：只有通过 webpack 命令行工具返回的 Promise 才生效。webpack() 只接受对象。
// module.exports = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         entry: './app.js',
//         /* ... */
//       });
//     }, 5000);
//   });
// };

// 3.导出多种配置
// 备注：如果你只传了一个 --config-name 名字标识，webpack 将只会构建指定的配置项。
// module.exports = [
//   {
//     output: {
//       filename: './dist-amd.js',
//       libraryTarget: 'amd',
//     },
//     name: 'amd',
//     entry: './app.js',
//     mode: 'production',
//   },
//   {
//     output: {
//       filename: './dist-commonjs.js',
//       libraryTarget: 'commonjs',
//     },
//     name: 'commonjs',
//     entry: './app.js',
//     mode: 'production',
//   },
// ];
