export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        registerForm: await this.load('./templates/register/registerForm.hbs')


    }
    this.partial('./templates/register/registerPage.hbs', this.app.userData);
}


export async function registerPost() {
    console.log(this.params);
    console.log(firebase);
    if (this.params.password != this.params.repeatPassword) {
        window.alert(`Password dont't match`)
    }
    else {
        firebase.auth().createUserWithEmailAndPassword(this.params.username, this.params.password)
            .then((user) => {
                this.redirect('#/login');
            })
            .catch((error) => {
              
                var errorMessage = error.message;
                alert(errorMessage);

            });

    }





}
