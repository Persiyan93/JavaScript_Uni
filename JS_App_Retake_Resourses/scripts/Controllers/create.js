import { createShoe } from '../data.js'
export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')

    }
    this.partial('./templates/create.hbs', this.app.userData);
}
export async function createPost() {
   
    let { brand, description, img, name, price } = this.params
    console.log(this.params)
    let newShoe = {
        brand,
        description,
        img,
        name,
        price,
        authorId: localStorage.getItem('userToken'),
        boughtBy: []

    }

    await createShoe(newShoe);
    this.redirect('#/home');


}