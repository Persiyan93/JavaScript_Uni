import { getShoes } from '../data.js';
export default async function () {

    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        shoeDetails: await this.load('./templates/home/shoeDetails.hbs')

    }


    let shoes = await getShoes();
    let data = { shoes };
    localStorage.setItem('shoes', shoes);
    Object.assign(data, this.app.userData);
    this.app.shoesData = Object.values(data.shoes);
    console.log(this.app.shoesData)
    this.partial('./templates/home/home.hbs', data);


}