function attachEvents() {
    let url = `https://rest-messanger.firebaseio.com/messanger.json`;
    let elements = {
        sendButton: document.querySelector('#submit'),
        refreshButton: document.querySelector('#refresh'),
        name: document.querySelector('#author'),
        message: document.querySelector('#content'),
        messages:document.querySelector('#messages')

    }
    elements.sendButton.addEventListener('click', sendMessage);
    elements.refreshButton.addEventListener('click', refresh)
    function sendMessage() {
        let personMessage = {
            author: elements.name.value,
            content: elements.message.value
        }
        let data = JSON.stringify(personMessage);
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', url);
        httpRequest.send(data);
        console.log(data);
        httpRequest.addEventListener('loadend',()=>{
            console.log(httpRequest);
        })
    }
    function refresh() {
        let httpRequest = new XMLHttpRequest;
        
        httpRequest.addEventListener('loadend',()=>{
           let messages=(JSON.parse(httpRequest.responseText))
            for (const key in messages) {
                console.log(key);
               elements.messages.value+=`${messages[key].author}: ${messages[key].content}+\n`;
            }
           
        })
        httpRequest.open('GET',url);
        httpRequest.send();
    }
}

attachEvents();