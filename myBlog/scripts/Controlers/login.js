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
 console.log( )
 try {
    await loginUser(user)
 } catch (error) {
     console.log(error)
 }

}