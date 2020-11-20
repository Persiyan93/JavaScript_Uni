import { getShoes } from '../data.js';
export default async function () {

    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        shoeDetails: await this.load('./templates/home/shoeDetails.hbs')

    }

    if (localStorage.getItem('userToken')) {
        let shoes = await getShoes()
        console.log(shoes)
        let data = { shoes };
        localStorage.setItem('shoes',shoes);
        Object.assign(data, this.app.userData);
        console.log(data);
        this.partial('./templates/home/home.hbs', data);
    }




}