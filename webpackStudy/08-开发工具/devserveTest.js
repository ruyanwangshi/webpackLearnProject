console.log('测试webpack-dev-server')

const res = 123

const arrowFn = () => {
  console.log('测试babel转换')
}

const Pro = Promise.resolve(123)

async function asyncFn() {
  const res = await Pro
  console.log(res)
}

function* foo() {
  const res = yield Pro
}

// const tokens = ['a', 'b', '[', 'c', 'd', '[', 'e', 'f', ']', 'g', 'h', ']', 'i', 'j']

// const t1 = ['a', 'b', ['c', 'd', ['e', 'f'], 'g', 'h'], 'i', 'j']

// function format(arr) {
//   const newarr = []
//   let arri = {
//       0: newarr,
//     },
//     count = 0,
//     countarr
//   for (let i = 0, l = arr.length; i < l; i += 1) {
//     if (arr[i] === '[') {
//       ++count
//       if (typeof countarr === 'object') {
//         countarr = arri[count] = countarr
//       } else {
//         newarr.push([])
//         countarr = arri[count] = newarr[i]
//       }
//       continue
//     } else if (arr[i] === ']') {
//       --count
//       countarr = arri[count]
//       continue
//     } else if (count !== 0) {
//     } else {
//       //   console.log(count)
//       if (countarr) {
//         countarr.push(arr[i])
//       } else {
//         arri[count].push(arr[i])
//       }
//     }
//   }
//   return newarr
// }

// console.log(format(tokens))

// console.log(res)
