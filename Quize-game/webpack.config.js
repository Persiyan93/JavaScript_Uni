var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:"/src/app.js",
   
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist2'),
        libraryTarget: 'var',
        library: 'EntryPoint'
    },
  
   plugins: [new HtmlWebpackPlugin()],
   mode: "development",
    devServer:{
        contentBase:'./dist'
    },
    module: {
        rules: [
        { test: /\.hbs$/, loader: "handlebars-loader"  } 
        ]
      }
};  