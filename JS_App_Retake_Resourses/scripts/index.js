import home from './Controllers/home.js'
import register,{registerPost} from './Controllers/register.js'
import login,{loginPost} from './Controllers/login.js'
import create ,{createPost}from './Controllers/create.js'
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
        this.get('#/details:id',details)
        this.post('#/register',(ctx)=>{registerPost.call(ctx)})
        this.post('#/login',(ctx)=>{loginPost.call(ctx)})
        this.post('#/create',(ctx)=>{createPost.call(ctx)})
        








    })
    app.run();
})