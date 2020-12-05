import { addPartials } from '../util.js'
import { database, getArticles, getArticle } from '../data.js';

export default async function () {
    await addPartials(this);

    let article = await getArticle(this.params.id);
    let data = Object.assign({}, article, this.app.userData);
    this.partial('../templates/details.hbs', data);
}   