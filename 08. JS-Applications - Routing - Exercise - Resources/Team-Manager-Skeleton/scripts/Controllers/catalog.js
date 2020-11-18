export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        teamMember: await this.load('./templates/catalog/team.hbs'),
       

    }
    let team={
        name:'CSKA',
        members:[{username:'Pesho'},{username:'Gosho'}]
    }
    this.partial('./templates/catalog/teamCatalog.hbs', this.app.userData);
    
}