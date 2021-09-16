const path = require('path')

const nodePath = process.cwd()

module.exports = function (resolvePath) {
    return path.resolve(nodePath, resolvePath)
}