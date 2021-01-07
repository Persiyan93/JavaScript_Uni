// import Route from './router/Route.js';
// import Router from './router/Router.js';
// import testView from './views/test.hbs';
// import login from './views/login.hbs';


// let routes = [new Route('test', testView, '#home')];
// routes.push(new Route('login', login, '#login'))
// let router = new Router(routes, document.querySelector('#root'));

function addEventListener() {
    document.querySelector('#root').addEventListener('click', navigateHandler);

}

function navigateHandler(e) {
    e.preventDefault()
    console.log(e.target.href);
    let url=new URL(e.target.href);
    console.log(url);
    history.pushState({},'',url.pathname.slice(1))




}
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
