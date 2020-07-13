const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "js")
                ],
                loader: "babel-loader"
            }
        ]
    },
    
    entry: './js/script.js'
}