import { buy } from '../data.js'
export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }
    let currentShoe = this.app.shoesData.filter(x => x.id === this.params.id)[0];
    if (!currentShoe.boughtBy) {
        currentShoe.boughtBy = [];
    }
    currentShoe.boughtBy.push({ 'email': localStorage.getItem('useremail') })
    await buy(currentShoe);
    this.redirect('#/home');
  
}