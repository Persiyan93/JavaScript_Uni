import home from './Controllers/home.js'
import register,{registerPost} from './Controllers/register.js'
import login,{loginPost} from './Controllers/login.js'
import create ,{createPost}from './Controllers/create.js'
import details from './Controllers/details.js'
import logout from './Controllers/logout.js';
import edit,{editPost} from './Controllers/edit.js'
import deleteOffer from './Controllers/delete.js';
import buy from './Controllers/buy.js';



window.addEventListener('load', () => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.userData= {
            loggedIn: ()=> {return localStorage.getItem('userToken')?true:false},
            email: localStorage.getItem('useremail')
            
        }
      
        this.shoesData={};

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
        this.get('#/logout',logout);
        this.get('#/edit:id',edit);
        this.post('#/edit:id',(ctx)=>{editPost.call(ctx)})
        this.get('#/delete:id',deleteOffer);
        this.get('#/buy:id',buy);
 })
    app.run();
})