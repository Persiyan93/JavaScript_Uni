import Route from './router/Route.js';
import Router from './router/Router.js';
import home from './views/home.js'
import login from './views/login.js'
var template = require("./test.hbs");
document.querySelector('#root').innerHTML=template({firstname:'Gosho'});
// let routes=[new Route('home',home,'#home')];
// routes.push(new Route('login',login,'#login'))
// let router=new Router(routes,document.querySelector('#root'));
// window.addEventListener('hashchange' ,e=>{
    
//     router.navigate(e.target.location.hash);
// })  
