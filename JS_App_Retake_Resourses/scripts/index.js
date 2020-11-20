import home from './Controllers/home.js'

window.addEventListener('load', () => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.userData = {
            loggedIn: false
        }


        this.get('/', home);
        this.get('#/home',home);
        this.get('index.html',home)








    })
    app.run();
})