const path = require('path');

const basePath = process.cwd()

module.exports =  function () {
    return path.resolve(basePath, arguments[0])
}