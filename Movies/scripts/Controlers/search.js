import { getMovies } from '../services.js'
export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),
        movieDetail: await this.load('../templates/home/movieDetail.hbs'),

    }

   
   let allMovies=await getMovies();
   let movies=allMovies.filter(x=>x.title.includes(this.params.title));
   let data={movies};
   Object.assign(data,this.app.userData);
   console.log(data);
   this.partial('../templates/home.hbs', data);



}