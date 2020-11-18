export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        team: await this.load('./templates/catalog/team.hbs'),
    }

    const data = Object.assign({}, this.app.userData);
    data.teams = [
        {
            _id:123132,
            name:'levski',
            coment:'sdasdasdas'
        },
        {
            _id:22222,
            name:'Liteks',
            coment:'sdasdasdas'
        },
        {
            _id:333333,
            name:'Cska',
            coment:'sdasdasdas'
        }
    
    
    ]
    this.partial('./templates/catalog/teamCatalog.hbs', data);

}