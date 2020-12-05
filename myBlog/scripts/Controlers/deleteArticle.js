
import { deleteArticle, getArticles } from '../data.js';

export default async function () {

    
    await deleteArticle(this.params.id);
    this.redirect('/home');


}   