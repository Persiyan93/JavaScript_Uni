import { addPartials } from '../util.js'
import { createArticle } from '../data.js'
export default async function () {
    if (this.params.category == '' || this.params.content == '' || this.params.title == '') {
        console.log('fuck off');
        return;
    }
    let authorId=this.app.userData.loggedIn();
    let article={
        authorId
    }
    Object.assign(article,this.params);
    createArticle(article);
    this.redirect('/home')
}

