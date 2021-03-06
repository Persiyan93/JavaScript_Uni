
    
import { editMovie, getMovies } from '../services.js'
export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),


    }
    let movies=await getMovies();
    let movie=(movies).filter(x=>x.id==this.params.id)[0];
    let data={movie};
    Object.assign(data,this.app.userData);
     this.partial('../templates/edit.hbs', data);
}

export async function editMoviePost(){
    let {title,description,img,id}=this.params;
    let movie ={
        title,
        description,
        img,
        id
    };
    await editMovie(movie);
    this.redirect(`#/details${id}`)


    
}