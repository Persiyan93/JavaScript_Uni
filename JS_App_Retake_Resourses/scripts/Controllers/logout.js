export default async function () {

    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
    }

    localStorage.clear();
    delete this.app.userData;
    delete this.app.shoes;
    this.redirect('#/home');
  
}