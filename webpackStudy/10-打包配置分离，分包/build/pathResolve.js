const path = require('path');

const nodePath = process.cwd();

module.exports = (pathResolve) => {
    return path.resolve(nodePath, pathResolve)
}