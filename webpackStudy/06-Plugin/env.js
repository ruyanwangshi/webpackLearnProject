const env = process.env.NODE_ENV;
console.log(process.env.NODE_ENV)
const config = {
    development: {
        url: '测试链接'
    },
    production: {
        url: '生产链接'
    }
}

module.exports = config[env]