
import { deleteMovie } from '../services.js'
export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),


    }
    let { id } = this.params;
    await deleteMovie(id);
    this.redirect('#/home');

}