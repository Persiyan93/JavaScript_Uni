import { getMovies } from '../services.js'
export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),
        movieDetail: await this.load('../templates/home/movieDetail.hbs'),

    }



    let data = {
        movies: await getMovies()
    }
    Object.assign(data, this.app.userData);

    this.partial('../templates/home.hbs', data);


}