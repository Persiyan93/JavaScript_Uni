export async function addPartials(ctx) {
    const partials = await Promise.all([
        ctx.load('../templates/common/header.hbs'),
        ctx.load('../templates/common/footer.hbs')
    ]);
    ctx.partials = {
        header: partials[0],
        footer: partials[1]
    }

}