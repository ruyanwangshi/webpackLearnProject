const path = require('path');

const nodePath = process.cwd()

module.exports = function(p) {
    return path.resolve(nodePath, p)
}