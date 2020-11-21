import { createShoe } from '../data.js'
export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')

    }
    this.partial('./templates/create.hbs', this.app.userData);
}
export async function createPost() {
    console.log(this.params)
    let { brand, description, img, model, price } = this.params
    let newShoe = {
        brand,
        description,
        img,
        model,
        price,
        authorId: localStorage.getItem('userToken'),
        boughtBy: []

    }

    await createShoe(newShoe);
    this.redirect('#/home');


}