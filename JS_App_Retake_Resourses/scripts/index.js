import home from './Controllers/home.js'
import register from './Controllers/register.js'
import login from './Controllers/login.js'

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








    })
    app.run();
})