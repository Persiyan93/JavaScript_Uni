export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')

    }

    this.partial('./templates/login.hbs', this.app.userData);
}
export async function loginPost() {
    let { email, password } = this.params;
    console.log(this);
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
            this.app.userData.loggedIn=true;
            this.app.userData.email=email
            localStorage.setItem('userToken',user.user.uid)
            localStorage.setItem('useremail',user.user.email)
            this.redirect('#/home')
            
        })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage);
        });
}