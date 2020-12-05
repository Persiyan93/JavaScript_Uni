import { addPartials } from '../util.js'
import { registerUser } from '../data.js'


export default async function () {
    await addPartials(this);


    this.partial('../templates/user/register.hbs');
}

export async function registerPost() {
    console.log(this.params)
    let { email, password, repeatPassword } = this.params;

    if (password != repeatPassword) {
        return;
    }
    let user = {
        email,
        password

    }
    try {
        let response = await registerUser(user);
        this.redirect('/login');
    } catch (error) {
        console.log(error)
    }

}