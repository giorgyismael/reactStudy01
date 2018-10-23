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
    //resolve é utilizado para resolver as extensões dos componentes, modulos, etc
    //não sendo necessário colocar o tipo do arquivo, mas somente o nome. Exemplo
    //import Component from './component.jsx' --> './component'
    resolve:{
        extensions:['','.js','.jsx']
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