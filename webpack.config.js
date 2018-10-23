const webpack = require('webpack')

module.exports = {
    entry: './ex/index.jsx',
    output:{
        path:__dirname+"/public",
        filename:"/bundle.js"
    },
    devServer:{
        port:8080,
        contentBase: __dirname+"/public",
    },
    module:{
        loaders:[{
            //A extenção .jsx é correspondente aos arquivos do React, assim é possível html junto com
            //javascript e realizar as configurações.
            test: /.jsx?$/,
            loader:'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}