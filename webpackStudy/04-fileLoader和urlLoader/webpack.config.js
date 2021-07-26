module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: `${__dirname}/dist`
    },
    module: {
        rules: [
            // {
            //     test: /\.(jpe?g|png|gif)/,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 name: 'img/[name].[hash:8].[ext]',
            //                 // output: 'img'
            //             }
            //         },
            //     ]
            // },
            {
                test: /\.(jpe?g|png|gif)/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: 'img/[name].[hash:8].[ext]',
                            // bit
                            limit: 100 * 1024 // 100kb
                        }
                    },
                ]
            },
        ]
    }
}