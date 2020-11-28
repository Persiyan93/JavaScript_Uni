import home from './Controlers/home.js';
import login,{loginPost} from './Controlers/login.js';
import register,{registerPost} from './Controlers/register.js';
window.addEventListener('load', () => {

    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');
        this.userData = {
            loggedIn: false,
            email:'pesho123'
        }

        this.get('/',home);
        this.get('#/home',home);
        this.get('index.html',home);
        this.get('#/login',login)
        this.get('#/register',register)
        this.post('#/register',(ctx)=>{registerPost.call(ctx)})

    });
    app.run()
});