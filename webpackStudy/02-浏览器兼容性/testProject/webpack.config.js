// const path = require('path');


module.exports = {
    entry: './src/main.js',
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}