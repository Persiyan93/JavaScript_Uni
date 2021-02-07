import Route from './Route.js'
import loginView from '../views/login.hbs';
import registerView from '../views/register.hbs';
import homeView from '../views/home.hbs';
import newGame from '../views/newGame.hbs';

let routes=[];
routes.push(new Route('login',loginView,'login'));
routes.push(new Route('register',registerView,'register'));
routes.push(new Route('home',homeView,'home'));
routes.push(new Route('newgame',newGame,'newgame'));


export default routes;

