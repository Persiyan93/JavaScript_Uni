import { getShoes } from "../data.js";

export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
    }

    let shoes=await getShoes();
    let currentShoe = shoes.filter(x => x.id === this.params.id)[0];
    
    if (currentShoe.authorId === localStorage.getItem('userToken')) {
        currentShoe.isAuthor = true;
    }


    this.partial('./templates/details/details.hbs', currentShoe);
}