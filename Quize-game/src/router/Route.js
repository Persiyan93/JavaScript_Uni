export default class Route{
    constructor(name,view,path){
        this.name=name;
        this.path=path;
        this.view=view;
    
    }
     
    renderView(info){
        return this.view(info);
    }
    
}