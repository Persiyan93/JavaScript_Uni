

export default async function () {

    localStorage.clear();
    console.log(this);
    this.redirect('/home');


}