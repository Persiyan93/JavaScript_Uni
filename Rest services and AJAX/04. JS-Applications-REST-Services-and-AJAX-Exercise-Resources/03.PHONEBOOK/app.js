function attachEvents() {
    let elements = {
        personName: document.querySelector('#person'),
        phoneNumber: document.querySelector('#phone'),
        ulPhoneBook: document.querySelector('#phonebook'),
        createButton: document.querySelector('#btnCreate'),
        loadButton: document.querySelector('#btnLoad')
    }

    elements.createButton.addEventListener('click', addContact)
    elements.loadButton.addEventListener('click', load);
    function deletePerson(e) {
        let httpRequest = new XMLHttpRequest();
        let personKey = e.currentTarget.parentElement.getAttribute('key');
        let url = ` https://phonebook-nakov.firebaseio.com/phonebook/${personKey}.json`
        httpRequest.open('DELETE', url);
        httpRequest.send();
        httpRequest.addEventListener('loadend', () => {
            console.log(httpRequest);
            load();
        })

    }
    function addContact(e) {
        let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`
        let personInfo = {
            person: elements.personName.value,
            phone: elements.phoneNumber.value
        }
        let data = JSON.stringify(personInfo);
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', url);
        httpRequest.send(data);
        httpRequest.addEventListener('loadend', () => {
            load();
        })
    }
    function load() {
        while (elements.ulPhoneBook.childElementCount != 0) {
            elements.ulPhoneBook.removeChild(elements.ulPhoneBook.lastChild);
        }
        let httpRequest = new XMLHttpRequest();
        let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
        httpRequest.open('GET', url);
        httpRequest.send();
        httpRequest.addEventListener('loadend', () => {
            let phonebook = JSON.parse(httpRequest.responseText);
            for (const key in phonebook) {
                let liElement = document.createElement('li');
                liElement.innerHTML = `${phonebook[key].person}: ${phonebook[key].phone}`
                liElement.setAttribute('key', key);
                let deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'Delete';
                deleteButton.addEventListener('click', deletePerson);
                liElement.appendChild(deleteButton);
                elements.ulPhoneBook.appendChild(liElement);
            }

        })
    }
}

attachEvents();