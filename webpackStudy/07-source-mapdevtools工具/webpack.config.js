
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: `${__dirname}/dist`
    },
    devtool:'source-map'
}