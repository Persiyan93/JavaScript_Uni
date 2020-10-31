function attachEvents() {
    let httpRequest = new XMLHttpRequest();
    let ulPhoneBook = document.querySelector('#phonebook');
    let createButton = document.querySelector('#btnCreate');
    createButton.addEventListener('click', addContact)

    let loadButton = document.querySelector('#btnLoad');
    loadButton.addEventListener('click', load);
    function deletePerson(e) {
        let personket=e.currentTarget.parentElement.getAttribute('key');
        console.log(personket);
        let url = ` https://phonebook-nakov.firebaseio.com/phonebook/.json`
    }
    function addContact(e) {

    }
    function load() {
        let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
        httpRequest.open('GET', url);
        httpRequest.send();
        httpRequest.addEventListener('loadend', () => {
            let phonebook = JSON.parse(httpRequest.responseText);
            for (const key in phonebook) {
                let liElement = document.createElement('li');
                console.log(phonebook[key]);
                liElement.innerHTML = `${phonebook[key].person}: ${phonebook[key].phone}`
                liElement.setAttribute('key', key);
                let deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'Delete';
                deleteButton.addEventListener('click', deletePerson);
                liElement.appendChild(deleteButton);
                ulPhoneBook.appendChild(liElement);
            }

        })
    }
}

attachEvents();