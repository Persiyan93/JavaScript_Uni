export  async function getShoes () {


     return await (fetch('https://shoes-ba7be.firebaseio.com/shoes.json')
          .then((respoese) => respoese.json()))
          




}