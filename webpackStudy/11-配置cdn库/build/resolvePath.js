const path = require('path')

const nodePath = process.cwd()

module.exports = function Resolve(resolvePath) {
  return path.resolve(nodePath, resolvePath)
}
