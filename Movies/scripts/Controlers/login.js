export default async function () {
    this.partials = {
        header: await this.load('../templates/common/header.hbs'),
        footer: await this.load('../templates/common/footer.hbs'),
        
    }


  
    this.partial('../templates/login.hbs',this.app.userData);


}
export async function loginPost(){

}