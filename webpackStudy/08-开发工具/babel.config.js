module.exports = {
  // babel 7.4 之前预设处理
  // 预设 加载顺序是从右往左加载
  presets: [
    [
        '@babel/preset-env',
      {
        // WARNING (@babel/preset-env): We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.
        // 当使用usage或entry选项时，@babel/preset-env会将对core-js模块的直接引用添加为裸导入（或需要）。这意味着core-js将相对于文件本身进行解析并且需要可访问。
        // 由于@babel/polyfill已在 7.4.0 中弃用，我们建议直接core-js通过corejs选项添加和设置版本
        useBuiltIns: false,
        // useBuiltIns: false,
        corejs: 3, // 单独使用core js
      },
    ],
  ],
}
