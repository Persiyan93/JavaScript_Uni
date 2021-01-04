export default class Router{
    constructor(routes,root){
        this.root=root;
        this.routes=routes;

    }
    navigate (path){
        let route=this.routes.filter(x=>x.path===path)[0];
        this.root.innerHTML=route.renderView();
    }
}