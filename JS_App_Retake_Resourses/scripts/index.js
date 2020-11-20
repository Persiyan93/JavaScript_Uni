import home from './Controllers/home.js'
import register from './Controllers/register.js'
import login from './Controllers/login.js'
import create from './Controllers/create.js'
import details from './Controllers/details.js'

window.addEventListener('load', () => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.userData = {
            loggedIn: true,
            email:'gosho@abv.bg'
        }


        this.get('/', home);
        this.get('#/home',home);
        this.get('index.html',home);
        this.get('#/register',register);
        this.get('#/login',login);
        this.get('#/create',create);
        this.get('#/details/:id',details)








    })
    app.run();
})