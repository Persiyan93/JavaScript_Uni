import { deleteOffert } from '../data.js'
export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')

    }

    await deleteOffert(this.params.id);
    this.redirect('#/home');


}