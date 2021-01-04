export default class Route{
    constructor(name,view,path){
        this.name=name;
        this.path=path;
        this.view=view;
    
    }
    renderView(){
        return this.view;
    }
    
}