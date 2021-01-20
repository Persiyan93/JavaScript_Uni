var path = require("path");

module.exports={
    entry:"/src/app.js",
   
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist'),
        libraryTarget: 'var',
        library: 'EntryPoint'
    },
    mode: "development",
    watch:true,
  
    devServer:{
        contentBase: __dirname,
        historyApiFallback: {
            index: 'index.html'
          }
    },
    module: {
        rules: [
        { test: /\.hbs$/, loader: "handlebars-loader"  } 
        ]
      }
};  