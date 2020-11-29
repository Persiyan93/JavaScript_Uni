
import { likeMovie,getMovies } from '../services.js'
export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),


    }
    let movies=await getMovies();
    let movie=movies.filter(x=>x.id==this.params.id)[0];
    if (!movie.likedBy) {
        movie.likedBy=[];
        console.log('init aray');
    }
    movie.likedBy.push(localStorage.getItem('userEmail'))
     await likeMovie(movie);
   
   this.redirect(`#/details${movie.id}`);
}
