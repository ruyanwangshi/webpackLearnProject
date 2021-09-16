const path = require('path')

const nodePath = process.cwd()
console.log(nodePath,888)
module.exports = function Resolve(resolvePath) {
  return path.resolve(nodePath, resolvePath)
}
