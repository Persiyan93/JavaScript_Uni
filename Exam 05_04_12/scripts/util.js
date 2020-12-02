export async function addPartials(ctx){
    ctx.partials = {
        header: await ctx.load('/templates/common/header.hbs'),
        footer: await ctx.load('/templates/common/footer.hbs')
    }
}