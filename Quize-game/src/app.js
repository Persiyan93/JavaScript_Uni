 import Route from './router/Route.js';
 import Router from './router/Router.js';
 import routes from './router/routes.js';


let router = new Router(routes, document.querySelector('#root'));
router.listen();
function addEventListener() {
    document.querySelector('#root').addEventListener('click', navigateHandler);

}
function navigateHandler(e) {
    e.preventDefault()
    console.log(location.pathname)
    let url=new URL(e.target.href);
    router.navigate(url.pathname.slice(1));




}
window.addEventListener('popstate',(e)=>{
console.log(e)
},true)
addEventListener();




//  window.addEventListener('submit',e=>{

//      console.log(e);
//      setTimeout(console.log('Pesho'),100000000);
//  })
//  window.addEventListener('hashchange' ,e=>{
//      e.preventDefault()
//     console.log(e);
//    router.navigate(e.target.location.hash);
// })  
