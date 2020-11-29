import home from './Controlers/home.js';
import login, { loginPost } from './Controlers/login.js';
import logout from './Controlers/logout.js';
import register, { registerPost } from './Controlers/register.js';
import { getMovies } from './services.js';
import details from './Controlers/details.js';
import deleteMovie from './Controlers/deleteMovie.js';
import editMovie,{editMoviePost} from './Controlers/editMovie.js';
import addMovie, { postMovie } from './Controlers/addMovie.js';
import likeMovie from './Controlers/likeMovie.js';


window.addEventListener('load', () => {

    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');
        this.userData = {
            loggedIn: () => localStorage.getItem('userToken'),
            email: () => localStorage.getItem('userEmail'),

        }

        this.get('/', home);
        this.get('#/home', home);
        this.get('index.html', home);
        this.get('#/login', login)
        this.get('#/register', register)
        this.post('#/register', (ctx) => { registerPost.call(ctx) });
        this.post('#/login', (ctx) => { loginPost.call(ctx) });
        this.get('#/logout', logout);
        this.get('#/details:id', details);
        this.get('#/addMovie', addMovie);
        this.post('#/addMovie', (ctx) => { postMovie.call(ctx) });
        this.get('#/delete:id', (ctx) => { deleteMovie.call(ctx) });
        this.get('#/edit:id', (ctx) => { editMovie.call(ctx) });
        this.post('#/edit:id', (ctx) => { editMoviePost.call(ctx) });
        this.get('#/like:id', (ctx) => { likeMovie.call(ctx) });
        
        


    });
    app.run()
});