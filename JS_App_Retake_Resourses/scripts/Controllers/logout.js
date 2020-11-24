export default async function () {

    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
    }

    await firebase.auth().signOut().then(() => {
        localStorage.clear();
        this.app.userData.loggedIn = false;
        this.redirect('#/home');

    }).catch(function (error) {
        alert(error);
    });
    




}