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
export  function registerUser(email,password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}
export function loginUser(email,password){
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function getToken(){
let url='https://opentdb.com/api_token.php?command=request';
    return database(url,'GET');
}

export function generateQuestion(amount,category,difficulty){
let url=`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
return database(url,'GET');
}