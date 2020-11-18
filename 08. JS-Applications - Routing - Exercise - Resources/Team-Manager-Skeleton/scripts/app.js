import home from './Controllers/home.js'
import about from './Controllers/about.js'
import catalog from './Controllers/catalog.js'
import details from './Controllers/details.js'
import register , {registerPost}  from './Controllers/register.js'
import login from  './Controllers/login.js'
import edit from  './Controllers/edit.js'
import create from'./Controllers/create.js'

window.addEventListener('load', () => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.userData={
            loggedIn:false,
            username:'Persi',
            hasTeam:false,
            isAuthor:true,
            isOnTeam:false,


        }

        this.get('index.html',home); 
        this.get('#/home',home); 
        this.get('/',home); 
        this.get('#/about',about);
        this.get('#/catalog',catalog);
        this.get('#/catalog/:id',details);
        
        this.get('#/register',register);
        this.get('#/login',login);
        this.get('#/edit/:id',edit);
        this.get('#/create',create);
        this.post('#/register',(ctx)=>{registerPost.call(ctx)})


    });

    app.run();
}); 