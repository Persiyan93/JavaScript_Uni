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
     let html=`https://shoes-ba7be.firebaseio.com/shoes/${id}.json`
     return await(fetch(html, {
          method: 'PATCH',
           headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(shoe)
     }).then((response)=>response.json()))
  
}
export async function deleteOffert(id) {
     let html=`https://shoes-ba7be.firebaseio.com/shoes/${id}.json`
      return await(fetch(html, {
          method: 'DELETE',
           headers: {
               'Content-Type': 'application/json'
            }}).then((response)=>response.json()))
  
}