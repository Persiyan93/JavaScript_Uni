import { addPartials } from '../util.js'
export default async function () {
    await addPartials(this);
    this.partial('../templates/login.hbs');


}