export default async function() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        

    }
   
   
    let shoe=data.shoes.filter(x=>x.id==this.params.id)[0];
    data.shoe=shoe;
    Object.assign(data,this.app.userData);
    console.log(data);
    
    
    this.partial('./templates/home/detailsModel.hbs',data);
}