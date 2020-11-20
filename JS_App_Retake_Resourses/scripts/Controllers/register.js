export default async function() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')

    }
    console.log(this.app.userData);
    this.partial('./templates/register.hbs',this.app.userData);
}