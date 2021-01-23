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