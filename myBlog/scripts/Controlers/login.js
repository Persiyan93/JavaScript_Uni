import { addPartials } from '../util.js'
import { loginUser } from '../data.js'

export default async function () {
    await addPartials(this);
    this.partial('../templates/user/login.hbs');
}

export async function loginPost() {

    let { email, password } = this.params;
    let user = {
        email,
        password,
    }

    try {
        let response = await loginUser(user);
        let userid = response.user.uid;
        let email = response.user.email;
        localStorage.setItem('userId', userid)
        localStorage.setItem('userEmail', email)
    } catch (error) {
        console.log(error)
        return
    }
    this.redirect('/home')


}