export async function getShoes() {
     return await (fetch('https://shoes-ba7be.firebaseio.com/shoes.json')
          .then((respoese) => respoese.json()))

}
export async function createShoe(team) {

     return await(fetch('https://shoes-ba7be.firebaseio.com/shoes.json', {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(team)
     }).then((response)=>response.json()))
  
}