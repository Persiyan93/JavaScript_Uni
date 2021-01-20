import Router from './router/Router.js';
import routes from './router/routes.js';

window.myFunctions={};
let rootDiv=document.querySelector('#root')
let router = new Router(routes,rootDiv);
router.initialLoad()




myFunctions.onRegisterSubmit=(e)=>{
    console.log(e)
    e.preventDefault()
    console.log(document.forms['register-form']);
    let formData=new FormData(document.forms['register-form']);
    let user ={};

    console.log(formData.get('email'),formData.get('password')); 

   
 }

 myFunctions.onLoginSubmit=(e)=>{
    console.log(e)
    e.preventDefault()
    console.log(document.forms['register-form']);
    let formData=new FormData(document.forms['register-form']);
    let user ={};
    
    console.log(formData.get('email'),formData.get('password')); 

   
 }









function addEventListener() {
    document.querySelector('#root').addEventListener('click', navigateForward);
    window.addEventListener('popstate', navigateBack)
    

}
function navigateForward(e) {
  

     if (!e.target.href) {
        return;
    }
    e.preventDefault()
    let url = new URL(e.target.href);
   
    router.navigate(url.pathname.slice(1));
}

function navigateBack() {
    
    router.navigateBack(location.pathname.slice(1))
}

addEventListener();




