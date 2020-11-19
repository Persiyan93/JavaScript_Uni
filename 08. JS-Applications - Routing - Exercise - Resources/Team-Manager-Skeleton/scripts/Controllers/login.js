export default async function() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        loginForm: await this.load('./templates/login/loginForm.hbs')

    }
    this.partial('./templates/login/loginPage.hbs', this.app.userData);
}

export async function loginPost(){
    console.log(this.params)
    firebase.auth().signInWithEmailAndPassword(this.params.username, this.params.password)
    .then((user) => {
        this.app.userData.loggedIn=true;
        this.app.userData.username=user.user.email;
        localStorage.setItem('userToken',user.user.uid);
        localStorage.setItem('username',user.user.email);
    this.redirect('#/home');
    console.log(user);
  })
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage);
  });
}