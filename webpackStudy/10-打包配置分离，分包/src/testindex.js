// import _ from 'lodash'

// console.log(_.join(['Another', 'module', 'loaded!'], ' '))
// console.log('测试分包')

// module.exports = function() {
//   const div = document.createElement('div')
//   div.innerHTML = '测试splitChunk分包'
//   return div
// }
import './foo_01'
// import './foo_02'

export default function() {
  const div = document.createElement('div')
  div.innerHTML = '测试splitChunk分包'
  return div
}
