
export default class Router{
    constructor(routes,root){
        this.root=root;
        this.routes=routes;

    }
    navigate (path){
        history.pushState({},'',path)
        let route=this.routes.filter(x=>x.path===path)[0];
        if (!route) {
            return
        }
        this.root.innerHTML=route.renderView();
    }
    listen(){
        console.log(location.pathname);
        if (location.pathname=='/') {
            router.navigate(location.pathname);
            console.log('inside 1')
        }
        else{
            console.log('inside 2')
            router.navigate(location.pathname.slice(1));
        }
    }
}