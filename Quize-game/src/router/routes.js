import Route from './Route.js'
import loginView from '../views/login.hbs';
import registerView from '../views/register.hbs';
import homeView from '../views/home.hbs';

let routes=[];
routes.push(new Route('login',loginView,'login'));
routes.push(new Route('register',registerView,'register'));
routes.push(new Route('/',homeView,'register'));

export default routes;

