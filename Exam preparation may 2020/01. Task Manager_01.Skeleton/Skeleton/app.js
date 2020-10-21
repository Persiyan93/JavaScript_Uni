function solve() {
    let button = document.querySelector('#add');
    button.addEventListener('click', add);
    let task = document.querySelector('#task');
    let description = document.querySelector('#description');
    let date = document.querySelector('#date');
    function add(e) {
        e.preventDefault();
        if (task.value != '' && description.value != '' && date.value != '') {
            Create();
        }
    }
    function Create() {

        let article = document.createElement('article');
        let hElement = document.createElement('h3');
        hElement.innerHTML = task.value;
        let paraagraphDescription = document.createElement('p');
        paraagraphDescription.innerHTML ='Description: '+ description.value;
        let paragraphDate = document.createElement('p');
        paragraphDate.innerHTML = 'Due Date: '+date.value;
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'flex');
        let startButton = document.createElement('button');
        startButton.innerHTML = 'Start';
        startButton.setAttribute('class', 'green');
        divElement.appendChild(startButton);
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'red');
        deleteButton.innerHTML = 'Delete';
        divElement.appendChild(deleteButton);
        article.appendChild(hElement);
        article.appendChild(paraagraphDescription);
        article.appendChild(paragraphDate);
        article.appendChild(divElement);
        document.querySelectorAll('section')[1].querySelectorAll('div')[1].appendChild(article);
        startButton.addEventListener('click', start);
        deleteButton.addEventListener('click', deleteTask);
        task.value='';
        description.value='';
        date.value='';


    }
    function deleteTask(e) {
        let taskArticle = e.target.parentElement.parentElement;
        taskArticle.remove();
    }

    function start(e) {
        e.preventDefault();
        let taskArticle = e.target.parentElement.parentElement;
        e.target.remove();
        let finishButton = document.createElement('button');
        finishButton.innerHTML = 'Finish';
        finishButton.setAttribute('class', 'orange');
        taskArticle.querySelector('div').appendChild(finishButton);
        let taskInProgress = document.querySelector('#in-progress');
        taskInProgress.appendChild(taskArticle);
        finishButton.addEventListener('click', finish);
    }
    function finish(e) {
        e.preventDefault();
        let taskArticle = e.target.parentElement.parentElement;
        let completeTasks = document.querySelectorAll('section')[3].querySelectorAll('div')[1];
        taskArticle.removeChild(e.target.parentElement);
        completeTasks.appendChild(taskArticle);
    }
}