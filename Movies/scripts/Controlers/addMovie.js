import { getMovies, createMovie } from '../services.js'
export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),


    }


    this.partial('../templates/addMovie.hbs', this.app.userData);
}
export async function postMovie() {
    let { title, description, img } = this.params
    if (title == '' || description == '' || img == '') {
        console.log('error');

    }
    let movie = {
        title,
        description,
        img,
        likedBy: [],
        authorId: localStorage.getItem('userToken')

    }
    await createMovie(movie);
    this.redirect('#/home');
}