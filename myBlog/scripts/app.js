import home from './Controlers/home.js'
import logout from './Controlers/logout.js'
import login, { loginPost } from './Controlers/login.js'
import register, { registerPost } from './Controlers/register.js'
import createArticle from './Controlers/createArticle.js'
import deleteArticle from './Controlers/deleteArticle.js'
import details from './Controlers/articleDetails.js'
import editArticle from './Controlers/editArticle.js'



window.addEventListener('load', () => {


    const app = Sammy('#root', function () {
        this.use('Handlebars', 'hbs');
        this.userData = {
            loggedIn: ()=>localStorage.getItem('userId'),
            email:()=> localStorage.getItem('userEmail'),

        }
        this.get('/', home);
        this.get('/home', home);
        this.get('index.html', home);
        this.get('/login', login)
        this.get('/register', register)
        this.post('/register', (ctx) => { registerPost.call(ctx) });
        this.post('/login', (ctx) => { loginPost.call(ctx) });
        this.get('/logout', logout);
        this.post('/create', (ctx) => { createArticle.call(ctx) });
        this.get('/delete:id', (ctx) => { deleteArticle.call(ctx) });
         this.get('/details:id', details);
         this.get('/edit:id', (ctx) => { editArticle.call(ctx) });
        // this.get('#/addMovie', addMovie);

        
      
        // this.post('#/edit:id', (ctx) => { editMoviePost.call(ctx) });
        // this.get('#/like:id', (ctx) => { likeMovie.call(ctx) });
        // this.get('#/search',searchMovie);

    })
    app.run()
})