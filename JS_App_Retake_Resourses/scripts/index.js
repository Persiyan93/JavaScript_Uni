import home from './Controllers/home.js'
import register,{registerPost} from './Controllers/register.js'
import login from './Controllers/login.js'
import create from './Controllers/create.js'
import details from './Controllers/details.js'

window.addEventListener('load', () => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.userData = {
            loggedIn: false,
            email:'gosho@abv.bg'
        }


        this.get('/', home);
        this.get('#/home',home);
        this.get('index.html',home);
        this.get('#/register',register);
        this.get('#/login',login);
        this.get('#/create',create);
        this.get('#/details',details)
        this.post('#/register',(ctx)=>{registerPost.call(ctx)})








    })
    app.run();
})