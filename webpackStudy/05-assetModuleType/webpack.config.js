module.exports = {
  entry: "./index.js",
  output: {
    filename: "index.js",
    path: `${__dirname}/dist`,

    // 对应 assets type 资源的创建生成路径名包含文件名
    // 在这个地方只要是assets加载的资源都会统一放到一块不推荐
    // assetModuleFilename: 'img/[name].[hash:6][ext]'
  },
  module: {
    rules: [
      // {
      //     test: /\.(jpe?g|png|gif)/,
      //     // 对应 file-loader
      //     type: 'asset/resource',
      //     // 对应设置
      //     generator: {
      //         filename: 'img/[name].[hash:6][ext]'
      //     }
      // },
      // {
      //     test: /\.(jpe?g|png|gif)/,
      //     // 对应 url-loader
      //     type: 'asset/inline', 这个不能设置generator属性
      // },
      {
        test: /\.(jpe?g|png|gif)/,
        // 对应 url-loader
        type: "asset",
        generator: {
          filename: "img/[name].[hash:6][ext]",
        },
        parser: {
            dataUrlCondition: {
                maxSize: 100  * 1024
            }
        }
      },
    ],
  },
};