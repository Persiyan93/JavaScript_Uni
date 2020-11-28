export async function getMovies() {
    let html = 'https://movies-50730.firebaseio.com/movies.json'
    let result = await (fetch(html).then((request) => request.json()));
    for (const key in result) {
        result[key].id=key;
    }
   let films=Object.values(result);
   return films;
}