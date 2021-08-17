import _ from 'lodash'

import numRef from './ref.json'

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum
    },
    ''
  )
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum
    },
    -1
  )
}

// async function main() {
//   console.log('main 1')
//   console.log(await Promise.all([promise1, promise2]))
//   console.log('main 2')
//   return 'main 3'
// }
// const promise1 = new Promise((resolve, reject) => {
//   console.log('promise1 1')
//   setTimeout(() => {
//     resolve('promise1 2')
//     console.log('promise1 3')
//   })
// })
// const promise2 = Promise.resolve()
//   .then(() => {
//     console.log('promise2 1')
//   })
//   .then(() => {
//     console.log('promise2 2')
//   })
// console.log(typeof main())
// promise 1
// main 1
// object 返回promise 但是不明白为什么会返回
// 执行任务队列 promise2 1
// 执行任务队列 promise2 2
// 执行任务队列 promise1 3
// [promise1 已决意(promise1 2), promise1 已决意(undefined)] then默认会返回promise但返回的结果是一个undefined
// 执行任务队列 main 2

const p1 = () =>
  new Promise((resolve, reject) => {
    console.log(1)
    let p2 = new Promise((resolve, reject) => {
      console.log(2)
      const timeOut1 = setTimeout(() => {
        console.log(3)
        resolve(4)
      }, 0)
      resolve(5)
    })
    resolve(6)
    p2.then((arg) => {
      console.log(arg)
    })
  })
const timeOut2 = setTimeout(() => {
  console.log(8)
  const p3 = new Promise((reject) => {
    reject(9)
  }).then((res) => {
    console.log(res)
  })
}, 0)
p1().then((arg) => {
  console.log(arg)
})
console.log(10)
