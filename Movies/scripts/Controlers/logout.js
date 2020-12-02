export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),

    }

    await firebase.auth().signOut().then(function () {
        localStorage.setItem('userToken','');
        localStorage.setItem('userEmail', '');
        console.log('unlog');
        


    }).catch(function (error) {
    console.log(error)
    });
    this.redirect('#/home');





}