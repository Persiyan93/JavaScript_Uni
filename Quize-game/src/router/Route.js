export default class Route{
    constructor(name,view,path){
        this.name=name;
        this.path=path;
        this.view=view;
    
    }
    renderView(){
        console.log(this.view());
        return this.view();
    }
    
}