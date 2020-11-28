import home from './Controlers/home.js';
window.addEventListener('load', () => {

    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');
        this.userData = {
            loggedIn: false,
            email:'pesho123'
        }

        this.get('/',home);
        this.get('#/home',home);
        this.get('index.html',home);

    });
    app.run()
});