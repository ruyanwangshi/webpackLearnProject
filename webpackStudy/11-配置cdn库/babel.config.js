module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
  plugins: [
    // 用于解析装饰器
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    // 用于编译vue2 jsx
    "transform-vue-jsx"
  ],
}
