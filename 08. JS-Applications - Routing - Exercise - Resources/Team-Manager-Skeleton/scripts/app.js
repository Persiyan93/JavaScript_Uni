import home from './Controllers/home.js'
import about from './Controllers/about.js'
import catalog from './Controllers/catalog.js'
import edit from './Controllers/edit.js'
import register from'./Controllers/register.js'
import login from  './Controllers/login.js'

window.addEventListener('load', () => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.userData={
            loggedIn:true,
            username:'Persi',
            hasTeam:true
        }

        this.get('index.html',home); 
        this.get('#/home',home); 
        this.get('/',home); 
        this.get('#/about',about);
        this.get('#/catalog',catalog);
        this.get('#/register',register);
        this.get('#/login',login);


    });

    app.run();
}); 