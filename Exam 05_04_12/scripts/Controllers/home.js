import { addPartials } from '../util.js'
export default async function () {
    await addPartials(this);
    console.log(this);



    // let data = {
    //     movies: await getMovies()
    // }
    // Object.assign(data, this.app.userData);
    // console.log(this.app);
     this.partial('../templates/home.hbs');


}