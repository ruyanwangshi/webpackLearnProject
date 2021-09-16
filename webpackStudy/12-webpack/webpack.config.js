const pathResolve = require('./pathResolve/index.js')

module.exports = {
    context: pathResolve('.'),
    entry: './src/index.js',
    output: {
        filename: 'js/[name].[hash:8].js',
        path: pathResolve('./dist')
    }
}