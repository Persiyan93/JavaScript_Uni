export async function getShoes() {
     return await (fetch('https://shoes-ba7be.firebaseio.com/shoes.json')
          .then((respoese) => respoese.json()))

}
export async function createShoe(shoe) {

     return await(fetch('https://shoes-ba7be.firebaseio.com/shoes.json', {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(shoe)
     }).then((response)=>response.json()))
  
}
export async function editShoe(shoe) {
     let {id}=shoe;
     return await(fetch(`https://shoes-ba7be.firebaseio.com/shoes${id}`, {
          method: 'PUT',
          credentials: 'include',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(shoe)
     }).then((response)=>response.json()))
  
}