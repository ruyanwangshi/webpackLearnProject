const path = require('path');


// process.chdir(xxx)
// process.cwd 获取当前node进程所在的目录具体还需要参考官网文档
const basePath = process.cwd()

module.exports =  function () {
    return path.resolve(basePath, arguments[0])
}