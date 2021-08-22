const webpack = require('webpack');
const configJs = require('../webpack.config.js')
// console.log(configJs)
// console.log(webpack)

const compiler = webpack(configJs);
// console.log(compiler)

compiler.run((err,res)=>{
    if(err){
        console.log(err)
    } else {
        console.log(res)
    }
})