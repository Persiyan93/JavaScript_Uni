class Article {
    #comments;
    #likes;
    #currentId
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = [];
        this.#currentId = 1;

    }
    get likes() {
        let resultMessage
        if (this.#likes.length === 0) {
            resultMessage = `${this.title} has 0 likes`;
        }
        else if (this.#likes.length === 1) {
            resultMessage = `${this.#likes[0]} likes this article!`;
        }
        else {
            resultMessage = `${this.#likes[0]} and ${this.#likes.length - 1} others like this article!`;
        }
        return resultMessage;
    }
    like(username) {
        if (this.#likes.some(x => x === username)) {
            throw new Error(`You can't like the same article twice!`);
        }
        else if (this.creator === username) {
            throw new Error(`You can't like your own articles!`);
        }
        this.#likes.push(username);
        return `${username} liked ${this.title}!`;
    }
    dislike(username) {
        if (!this.#likes.some(x => x === username)) {
            throw new Error(`You can't dislike this article!`);
        }
        let index = this.#likes.indexOf(username);
        this.#likes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }
    comment(username, content, id) {
        if (!id || !this.#comments.some(x => x.id === id)) {
            let comment = {
                id: this.#currentId,
                username,
                content,
                replies: []
            }
            this.#currentId++;
            this.#comments.push(comment);
            return `${username} commented on ${this.title}`
        }
        else {
            let currentComment = this.#comments.find(x => x.id === id);
            currentComment.replies.push({
                id: `${id}.${currentComment.replies.length + 1}`,
                username,
                content
            });
            return 'You replied successfully';
        }
    }
    toString(sortingType) {
        let sortFunction;
        if (sortingType == 'asc' || sortingType == 'desc') {
            switch (sortingType) {
                case 'asc':
                    sortFunction = (a, b) => a.id - b.id;
                    break;
                case 'desc':
                    sortFunction = (a, b) => b.id - a.id;
                    break;
            }
        }
        else {
            sortFunction = (a, b) => a.username.localeCompare(b.username);
        }
        let resultMessage = `Title: ${this.title}\n`;
        resultMessage += `Creator: ${this.creator}\n`
        resultMessage += `Likes: ${this.#likes.length}\n`
        resultMessage += 'Comments:\n';
        this.#comments.sort(sortFunction).forEach(element => {
            resultMessage += `-- ${element.id}. ${element.username}: ${element.content}\n`;
            if (element.replies.length > 0) {

                element.replies.sort(sortFunction).forEach(reply => {
                    resultMessage += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                });
            }
        });
        return resultMessage.trimEnd();

    }
}
let art = new Article("My Article", "Anny");
art.like("John")
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
