### jsx 编译需要装的插件

> @vue/babel-helper-vue-jsx-merge-props
> vue jsx 转换器内部使用的一个包，用于合并 props 传播。需要像这样合并一些道具树

> @babel/plugin-syntax-jsx(具体描述还是不懂)
> 直接用来转换 jsx 代码

> babel-plugin-transform-vue-jsx
> 与这个互斥babel-plugin-transform-react-jsx
主要用来编译vuejsx

```javascript
// babel.config.js
module.exports = {
  plugins: [
    // 用于解析装饰器
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    // 用于编译vue2 jsx
    'transform-vue-jsx',
  ],
}
```
