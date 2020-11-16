
window.addEventListener('load', () => {
    console.log('dasdda');
    let catTemplate = document.querySelector('#cat-template').innerHTML;
    let templateFunc = Handlebars.compile(catTemplate);
    //Generate HTML
    let generatedHtml = cats.map(cat => templateFunc(cat)).join('');
    //Append generated HTML
    let ulElement = document.querySelector('#allCats').children[0];
    ulElement.innerHTML = generatedHtml;
    //Add eventListener
    ulElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName==='BUTTON') {
            if (e.target.parentElement.children[1].style.display === 'block') {
                e.target.parentElement.children[1].style.display = 'none';
            }
            else {
                e.target.parentElement.children[1].style.display = 'block';
            }

        }

    })



})

