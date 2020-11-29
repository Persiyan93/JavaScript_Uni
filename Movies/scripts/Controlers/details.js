import { getMovies } from '../services.js'
export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),
       

    }
    let movies=await getMovies()
    console.log(movies);
    let movie=movies.filter(x=>x.id==this.params.id)[0];
    console.log(movie.authorId);
    console.log(localStorage.getItem('userToken'));
    if (movie.authorId==localStorage.getItem('userToken')) {
        movie.isAuthor=true;
        console.log('inside')
    } 
    else if (movie.likedBy) {
        if(movie.likedBy.includes(localStorage.getItem('userEmail'))){
            movie.userLiked=true;
        }
    }
    
   
    let data={movie};
    Object.assign(data,this.app.userData);
     this.partial('../templates/details.hbs',data);
}