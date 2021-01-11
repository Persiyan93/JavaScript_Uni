import Router from './router/Router.js';
import routes from './router/routes.js';


console.log(document.querySelector('#root'))
let rootDiv=document.querySelector('#root')

let router = new Router(routes,rootDiv);

router.initialLoad()

function test(e){
    e.preventDefault()
    console.log('inside Register Submit');
}

function addEventListener() {
    document.querySelector('#root').addEventListener('click', navigateForward,{once:true});
    window.addEventListener('popstate', navigateBack)
    

}
function navigateForward(e) {
    e.preventDefault()
    if (!e.target.href) {
        return;
    }

    let url = new URL(e.target.href);
   console.log(e);
    console.log(url.pathname)
    router.navigate(url.pathname.slice(1));
}

function navigateBack() {
    console.log(location)
    router.navigateBack(location.pathname.slice(1))
}

addEventListener();





