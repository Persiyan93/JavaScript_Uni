
const baseUrl = 'https://softwiki-976ab-default-rtdb.firebaseio.com/articles'
let url = {
    createArticle: baseUrl + '.json',
    getArticles: baseUrl + '.json'
}

export async function registerUser(user) {
    let { email, password } = user;
    return firebase.auth().createUserWithEmailAndPassword(email, password)

}
export async function loginUser(user) {
    let { email, password } = user;
    return firebase.auth().signInWithEmailAndPassword(email, password)

}

export async function createArticle(article) {

    return database(url.createArticle, 'POST', article);
}
export async function getArticles() {
    let request = await database(url.getArticles, 'GET');
    for (const key in request) {
        request[key].id = key;

    }
    if (request) {
        return Object.values(request);
    }


}
export async function deleteArticle(id) {
    let url = baseUrl + `/${id}.json`
    let response = await database(url, 'DELETE');
}
export function getArticle(id) {
    let url = baseUrl + `/${id}.json`;
    return database(url, 'GET');
}

export async function database(url, method, body) {
    let options = {
        method
    }
    if (body) {
        Object.assign(options, {
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(body)
        })
    }
    let response = await fetch(url, options);
    let data = await response.json();
    return data;
}










// export async function registerUser(user){

// }
// export async function loginUser(user){

// }
// export async function logOutUser(){

// }




// export async function getMovies() {
//     let html = 'https://movies-50730.firebaseio.com/movies.json'
//     let result = await (fetch(html).then((request) => request.json()));
//     for (const key in result) {
//         result[key].id = key;
//     }
//     let films = Object.values(result);
//     return films;
// }

// export async function createMovie(movie) {

//     return await (fetch('https://movies-50730.firebaseio.com/movies.json', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(movie)
//     }).then((response) => response.json()))

// }

// export async function deleteMovie(id) {
//     let html = `https://movies-50730.firebaseio.com/movies/${id}.json`
//     return await (fetch(html, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then((response) => response.json()))

// }
// export async function editMovie(movie) {
//     let { id } = movie;
//     let html = `https://movies-50730.firebaseio.com/movies/${id}.json`
//     return await (fetch(html, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//         },
//         body: JSON.stringify(movie)
//     }).then((response) => response.json()))

// }
// export async function likeMovie(movie) {
//     let html = `https://movies-50730.firebaseio.com/movies/${movie.id}.json`
//     return await (fetch(html, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//         },
//         body: JSON.stringify(movie)
//     }).then((response) => response.json()))

// }

