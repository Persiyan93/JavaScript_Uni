import Route from './router/Route.js';
import Router from './router/Router.js';
import home from './views/home.js'
import login from './views/login.js'

let routes=[new Route('home',home,'#home')];
routes.push(new Route('login',login,'#login'))
let router=new Router(routes,document.querySelector('#root'));
window.addEventListener('hashchange' ,e=>{
    
    router.navigate(e.target.location.hash);
})  
