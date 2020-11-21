export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')

    }

    this.partial('./templates/register.hbs', this.app.userData);
}
export async function registerPost() {


    let { email, password, repeatedPassword } = this.params;
    console.log(this);
    if (email.length == 0 || password < 6 || password != repeatedPassword) {
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
            this.redirect('#/home');
        })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage)
        });


}