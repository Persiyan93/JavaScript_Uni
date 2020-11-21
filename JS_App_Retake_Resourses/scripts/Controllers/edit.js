
import {editShoe} from '../data.js';
export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')

    }
    let currentShoe = this.app.shoesData.filter(x => x.id === this.params.id)[0];
    console.log(this.params)
    this.partial('./templates/edit.hbs', currentShoe);

}
    export async function editPost() {
        console.log(this.params)
        let { name, price, img, description, brand ,id} = this.params
        let editedShoe={
            name,
            price,
            img,
            description,
            brand,
            id
        }
       await editShoe(editedShoe);
    }

