import home from './Controllers/home.js'
window.addEventListener('load', () => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.userData={
            loggedIn:true,
            username:'Persi',
            hasTeam:false
        }

        this.get('index.html',home); 
    })

    app.run();
}); 