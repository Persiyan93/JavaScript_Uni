var path = require("path");
module.exports={
    entry:"/src/app.js",
   watch:true,
    devServer:{
        contentBase:'./dist'
    },
    module: {
        rules: [
        { test: /\.hbs$/, loader: "handlebars-loader"  } 
        ]
      }
};  