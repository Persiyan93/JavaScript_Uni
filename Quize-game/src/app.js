import Router from './router/Router.js';
import routes from './router/routes.js';
import { registerUser,loginUser } from './data.js'

window.myFunctions = {};
let rootDiv = document.querySelector('#root')
let router = new Router(routes, rootDiv);
router.initialLoad()




myFunctions.onRegisterSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(document.forms['form']);
    let repeatPassword = formData.get('repeatPassword');
    let email = formData.get('email');
    let password = formData.get('password');

    try {
        if (password.length < 6) {
            throw new Error('Password must be 6 symbols at least')
        }
        else if (password == repeatPassword) {
            await registerUser(email, password)
        }
        else {

            throw new Error('The two passwords must match');
        }
    } catch (error) {
        console.log(error.message);
    }


}

myFunctions.onLoginSubmit = async (e) => {
   e.preventDefault()
   let formData = new FormData(document.forms['form']);
    let password = formData.get('password');
    let email = formData.get('email');
    console.log(email);
    console.log(password)
    let user=await loginUser(email,password);
    console.log(user);
    localStorage.setItem('userId',user.user.uid);
    localStorage.setItem('userEmail',user.user.email)  
 

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




