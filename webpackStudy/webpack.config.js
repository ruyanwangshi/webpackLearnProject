const path = require('path')

// interface Object{
//  [entryName: string]: string | Array<string> // path 映射路径
// }

module.exports = {
  // 模式
  mode: 'development',
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
    filename: '[name].[hash:8].js',
    path: `${__dirname}/dist`, // 输出到磁盘对应目录下的绝对路径
    // 开发环境：Server和图片都是在localhost（域名）下
    // .image {
    //     background-image: url('./test.png');
    //    }
    // 生产环境：Server部署下HeroKu但是图片在CDN上
    //   .image {
    //     background-image: url('https://someCDN/test.png');
    publicPath: 'http://cdn.example.com/assets/[hash]', // 主要用于配置引入css或图片资源路径的配置
  },

  // loader 对于模块进行转换。loader可以使你在import或“加载”模块时预处理文件。
 module: {
     rules: [
         {
             test: /\.css$/,
             use: ['style-loader', 'css-loader']
         },
         {
             test: /.ts$/,
             use: ['ts-loader']
         }
     ]
 },
 resolve: {
   extensions: ["*",".ts","tsx",".js"]
 }
}
