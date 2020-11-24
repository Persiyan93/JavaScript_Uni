
import {editShoe,getShoes} from '../data.js';

export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')

    }
    let shoes=await getShoes();
    let currentShoe =shoes.filter(x => x.id === this.params.id)[0];
   this.partial('./templates/edit.hbs', currentShoe);

}
    export async function editPost() {
        
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
       this.redirect(`#/details${id}`)
    }

