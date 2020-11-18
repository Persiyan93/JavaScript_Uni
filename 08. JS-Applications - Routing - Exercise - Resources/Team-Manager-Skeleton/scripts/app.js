import home from './Controllers/home.js'
import about from './Controllers/about.js'
import catalog from './Controllers/catalog.js'

window.addEventListener('load', () => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.userData={
            loggedIn:true,
            username:'Persi',
            hasTeam:false
        }

        this.get('index.html',home); 
        this.get('#/home',home); 
        this.get('/',home); 
        this.get('#/about',about);
        this.get('#/catalog',catalog);


    });

    app.run();
}); 