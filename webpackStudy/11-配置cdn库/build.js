const webpack = require('webpack');
const config = require('./build/webpack.config')({
    production: true
})

// let compiler = webpack(config);

// new webpack.ProgressPlugin().apply(compiler);

// compiler.run(function (err, stats) {
//     console.log(err)
//     console.log(stats)
// });

console.log(webpack)
console.log(config)