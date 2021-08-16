const happypack = require('happypack')
const os = require('os')
const happThreadPool = happypack.ThreadPool({
  size: os.cpus().length,
})
module.exports = (happypackList = []) => {
//   const arr = []
//   for (let i = 0, l = happypackList.length; i < l; i += 1) {
//     //   console.log(happypackList[i])
//     arr.push(
//       new happypack({
//         id: happypackList[i].id,
//         loaders: happypackList[i].loaders,
//         // threads: [happThreadPool],
//         threadPool: happThreadPool,
//       })
//     )
//   }
//   console.log(...arr)
  return new happypack({
    id: 'happyBabel',
    loaders: ['babel-loader'],
    // threads: [happThreadPool],
    threadPool: happThreadPool,
  })
}
