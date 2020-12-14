import { addPartials } from '../util.js'
import { getArticles } from '../data.js';
import { successMessage } from './notification.js';

export default async function () {
    await addPartials(this);
    let data=Object.assign({},this.app.userData);

    this.partials.article = await this.load('../templates/article.hbs')
    let allArticles = await getArticles();
    if (allArticles) {
        let articles=allArticles.filter(x=>x.authorId=this.app.userData.loggedIn())
        data.articles=articles;
        
    }

    
    
    this.partial('../templates/home.hbs');
}   