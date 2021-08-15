// console.log('测试分包')
// console.log('测试chunkhash改变')
// import Vue from 'vue'
// import App from '../app.vue'

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app')

import _ from 'lodash'
import './foo_01'
// import './testindex'
// import './foo_02';
// import './testindex';
// webpackPreload会在父文件加载完之后就会加载
// webpackPrefetch会在所有文件加载完之后就会加载
// import(/* webpackPreload：true */ /* chunkFileName: "testindex" */ './testindex').then(({ default: elFn }) => {
// import( /* webpackChunkName: "testindex" */ /* webpackPrefetch：true */ './testindex').then(({ default: elFn }) => {
//   // 预加载

//   document.documentElement.appendChild(elFn())
// })

// import(/* webpackChunkName: "testindex1" */ './testindex1').then(({ default: elFn }) => {
//   // 预加载

//   document.documentElement.appendChild(elFn())
// })




// console.log(_.join(['Another', 'module', 'loaded!'], ' '));

const button = document.createElement('buttom');

button.innerHTML = '加载异步代码';

button.onclick = () => {
  // import(/* webpackPrefetch: true */'./testindex').then((res) => { // 预获取
  import(/* webpackPreload: true*/ './testindex').then(({default: elFn}) => { // 预加载

    document.documentElement.appendChild(elFn())
  })
}

document.documentElement.appendChild(button)
