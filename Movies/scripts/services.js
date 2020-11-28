export async function getMovies() {
    let html = 'https://movies-50730.firebaseio.com/movies.json'
    let result = await (fetch(html).then((request) => request.json()));
    for (const key in result) {
        result[key].id=key;
    }
   let films=Object.values(result);
   return films;
}

export async function createMovie(movie) {

    return await (fetch('https://movies-50730.firebaseio.com/movies.json', {
         method: 'POST',
         headers: {
              'Content-Type': 'application/json'
         },
         body: JSON.stringify(movie)
    }).then((response) => response.json()))

}

export async function deleteMovie(id) {
    let html = `https://movies-50730.firebaseio.com/movies/${id}.json`
    return await (fetch(html, {
         method: 'DELETE',
         headers: {
              'Content-Type': 'application/json'
         }
    }).then((response) => response.json()))

}
// export async function buy(shoe) {
//     let html = `https://shoes-ba7be.firebaseio.com/shoes/${shoe.id}.json`
//     return await (fetch(html, {
//          method: 'PATCH',
//          headers: {
//               'Content-Type': 'application/json',
//               'Access-Control-Allow-Origin': '*',
//          },
//          body: JSON.stringify(shoe)
//     }).then((response) => response.json()))

// }
// export async function editShoe(shoe) {
//     let { id } = shoe;
//     let html = `https://shoes-ba7be.firebaseio.com/shoes/${id}.json`
//     return await (fetch(html, {
//          method: 'PATCH',
//          headers: {
//               'Content-Type': 'application/json',
//               'Access-Control-Allow-Origin': '*',
//          },
//          body: JSON.stringify(shoe)
//     }).then((response) => response.json()))

// }
