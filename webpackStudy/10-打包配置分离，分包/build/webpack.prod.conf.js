const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
//   mode: 'development',
// 备注：如果是import()导入的包不管是多大都会进行一个分包
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    // chunkIds: 'named', // 这和属性也不需要设置会跟mode环境来进行区分对应参数配置，主要用来设置生成chuncks名称
    splitChunks: {
      // 有三种参数配置选项async表示异步，只有异步导入才会被分包,initial表示同步导入会被分包，all是俩者都会被分包
      chunks: 'all',

      // 以下配置只需要使用默认值就可以，不需要手动配置
      // 大于多少的包才会被分包，默认值为20000优先级大于maxsize如果这个条件没有满足那么cachegroups就不会被执行，那么会执行默认分包行为
      minSize: 20,
      // 大于多少的包才会被再次拆分 一般设置为minsize值一样
      // maxSize: 200000000,
      // 需要至少导入几次才会被拆分，默认为1
      minChunks: 1,
      // 拆分第三方包
      // 缓存组可以继承和/或覆盖来自 splitChunks.* 的任何选项。但是 test、priority 和 reuseExistingChunk 只能在缓存组级别上进行配置。将它们设置为 false以禁用任何默认缓存组。
      cacheGroups: {
        // 缓存分组
        testChunk: {
          test: /[\\/]node_modules[\\/]/,
          // name: '[id]_vendors.js]',
          filename: 'static/js/[id]_vendors.js',
          priority: -10, // 执行缓存分包条件优先级
          reuseExistingChunk: true,
        },
        // fooChunk: { // 如果分包没有大于最小minsize大小是不会被分包
        //     test: /foo_/,
        //     filename: 'static/js/[id]_foo.js',
        // },
        default: {
            minChunks: 2, // 默认如果引入模块包大于俩次，那么也进行分包
            filename: 'static/js/common_[id].js',
            priority: -20,
            reuseExistingChunk: true,
        }
      },
    },
    // 将 optimization.runtimeChunk 设置为 true 或 'multiple'，会为每个入口添加一个只含有 runtime 的额外 chunk。此配置的别名如下：
    // runtimeChunk: true,
  },
}
