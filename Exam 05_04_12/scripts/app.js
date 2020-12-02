import home from './Controllers/home.js'
import register from './Controllers/register.js'
import login from './Controllers/login.js'
window.addEventListener('load', () => {

    const app = Sammy('#root', function () {
        this.use('Handlebars', 'hbs');
        this.userData = {
            loggedIn: () => localStorage.getItem('userToken'),
            email: () => localStorage.getItem('userEmail'),

        }

        this.get('/', home);
        this.get('/home', home);
        this.get('index.html', home);
        this.get('/register', register)
         this.get('/login', login)
       
        // this.post('/register', (ctx) => { registerPost.call(ctx) });
        // this.post('/login', (ctx) => { loginPost.call(ctx) });
        // this.get('/logout', logout);
        // this.get('/details:id', details);
        // this.get('/addMovie', addMovie);
        // this.post('/addMovie', (ctx) => { postMovie.call(ctx) });
        // this.get('/delete:id', (ctx) => { deleteMovie.call(ctx) });
        // this.get('/edit:id', (ctx) => { editMovie.call(ctx) });
        // this.post('/edit:id', (ctx) => { editMoviePost.call(ctx) });
        // this.get('/like:id', (ctx) => { likeMovie.call(ctx) });
        // this.get('/search', searchMovie);




    });
    app.run()
});