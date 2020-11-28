export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),

    }

    await firebase.auth().signOut().then(function () {
        localStorage.clear();
        console.log(this.app.user)


    }).catch(function (error) {
        // An error happened.
    });
    this.redirect('#/home');





}