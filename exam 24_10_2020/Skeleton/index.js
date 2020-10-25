function solve() {
    let lectureName = document.querySelector('[name="lecture-name"]');
    let dateLecture = document.querySelector('[name="lecture-date"]');
    let module = document.querySelector('[name="lecture-module"]');
    let button = document.querySelector('[class="form-control"]>button');

    button.addEventListener('click', add);
    function add(e) {
        e.preventDefault();
        if (!lectureName.value || !dateLecture.value || module.value == 'Select module') {
            return;
        }
        let modules = Array.from((document.querySelector(' body > main > section.user-view.section-view > div').children));
        let divElement
        if (modules.length != 0) {
            modules.forEach(currentModule => {
                if (currentModule.children[0].textContent === (module.value.toUpperCase() + '-MODULE')) {
                    divElement = currentModule;
                }
            });
        }
        if (modules.length === 0 || !divElement) {

            divElement = document.createElement('div');
            divElement.className = 'module';
            let hElement = document.createElement('h3');
            hElement.textContent = `${module.value.toUpperCase()}-MODULE`;
            divElement.appendChild(hElement);
            let ulElement = document.createElement('ul');
            divElement.appendChild(ulElement);
            document.querySelector(' body > main > section.user-view.section-view > div').appendChild(divElement);
        }

        let ulElement = divElement.querySelector('ul');
        let liElement = document.createElement('li');
        liElement.className = 'flex';
        let h4Element = document.createElement('h4');
        let formateDate = dateLecture.value.replace(/-/g, '/');
        formateDate = formateDate.replace('T', ' - ');
        h4Element.textContent = `${lectureName.value.toUpperCase()} - ${formateDate}`;
        let button = document.createElement('button');
        button.setAttribute('class', 'red');
        button.addEventListener('click', del);
        button.textContent = 'Del';
        liElement.appendChild(h4Element);
        liElement.appendChild(button);
        ulElement.appendChild(liElement);
        sortDate(ulElement);
    }
    function del(e) {
        console.log('ivan')
        let curentUlElement = (e.target.parentElement.parentElement);
        let ularray = Array.from(curentUlElement.children)
        console.log(curentUlElement);
        if (ularray.length === 1) {
            curentUlElement.parentElement.remove();
        }
        else {
            e.target.parentElement.remove();
        }

    }
    function sortDate(ulElement) {
        let liElements = Array.from(ulElement.children);
        liElements.sort((a, b) => {
            return convertdate(a).localeCompare(convertdate(b));
        });
        liElements.forEach(element => {
            ulElement.appendChild(element);
        });

    }
    function convertdate(liElement) {
        let date = liElement.children[0].textContent;
        date = date.split(' - ');
        date.shift();
        return date.toString();

    }


};