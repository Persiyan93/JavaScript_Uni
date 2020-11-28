export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),

    }

    this.partial('../templates/register.hbs', this.app.userData);


}
export async function registerPost() {
    console.log(this);
    let elements = {
        errorBox: document.querySelector('#errorBox'),
        successBox: document.querySelector('#successBox')
    }
    console.log(elements)
    let { email, password, repeatedPassword } = this.params;
    if (password.length < 6) {
        elements.errorBox.innerHTML='Minimum lenght of password should be 6 symbols';
        elements.errorBox.removeAttribute('style');
        return;
    }
    else if (password != repeatedPassword) {
        alert
    }
    await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            this.redirect('#/home');
        })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage)
        });
}