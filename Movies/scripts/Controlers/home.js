import { getMovies } from '../services.js'
import notification from '../Controlers/notification.js'
export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),
        movieDetail: await this.load('../templates/home/movieDetail.hbs'),

    }


    notification();
    let data = {
        movies: await getMovies()
    }
    Object.assign(data, this.app.userData);
    console.log(this.app);
    this.partial('../templates/home.hbs', data);


}