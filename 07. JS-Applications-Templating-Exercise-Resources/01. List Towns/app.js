window.addEventListener('load', () => {
    let button = document.querySelector('#btnLoadTowns');
    //create  template function
    let templatestring = document.querySelector('#template').innerHTML;
    let templateFunc = Handlebars.compile(templatestring);
    //addd eventListener
    button.addEventListener('click', (e) => {
        e.preventDefault()
        //read input
        let inputEl = document.querySelector('#towns');
        let towns = inputEl.value.split(', ');
        //generate HTML
        let generatedHtml = templateFunc({ towns });
        //Append html to DOM tree
        let ulElement = document.querySelector('#root').children[0];
        ulElement.innerHTML += generatedHtml;

    });
})
