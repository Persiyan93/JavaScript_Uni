
export default class Router {
    constructor(routes, root) {
        this.root = root;
        this.routes = routes;

    }
    navigate(path) {
        let user={};
        user.loggedIn=localStorage.getItem('userId');
        history.pushState(user, '', path)
        let route = this.routes.filter(x => x.path === path)[0];
        if (!route) {
            return;
        }
        this.root.innerHTML = route.renderView(user);
    }
    navigateBack(path) {
        let route = this.routes.filter(x => x.path === path)[0];
        if (!route) {
            return
        }
        this.root.innerHTML = route.renderView();
     
    }
    initialLoad() {
        let path = location.pathname.slice(1);
        if (this.routes.some(x => x.path == path)) {
            this.navigate(path);

        }
        else {

            this.navigate('home');
        }

    }
}