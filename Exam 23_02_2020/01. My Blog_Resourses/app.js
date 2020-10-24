
function solve() {

   let author = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');
   let createButton = document.querySelector('button.btn');
   let articlesSection = document.querySelector('[class=site-content]>main>section')
   createButton.addEventListener('click', create);
   function create(e) {
      e.preventDefault();
      let article = document.createElement('article');
      let hElement = document.createElement('h1');
      hElement.innerHTML = title.value;
      let categoryParagraph = document.createElement('p');
      categoryParagraph.innerHTML = 'Category:' + `<strong>${category.value}</strong>`;
      let creatorParagraph = document.createElement('p');
      creatorParagraph.innerHTML = 'Creator:' + `<strong>${author.value}</strong>`;
      let contentParaghraph = document.createElement('p');
      contentParaghraph.innerHTML = content.value;
      let buttonsDiv = document.createElement('div');
      buttonsDiv.className = 'buttons';
      let deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Delete';
      deleteButton.setAttribute('class', 'btn delete');
      let archiveButton = document.createElement('button');
      archiveButton.innerHTML = 'Archive';
      archiveButton.setAttribute('class', 'btn archive');
      buttonsDiv.appendChild(deleteButton);
      buttonsDiv.appendChild(archiveButton);
      article.appendChild(hElement);
      article.appendChild(categoryParagraph);
      article.appendChild(creatorParagraph);
      article.appendChild(contentParaghraph);
      article.appendChild(buttonsDiv);
      articlesSection.appendChild(article);
      archiveButton.addEventListener('click', archieve);
      deleteButton.addEventListener('click',deleteArticle)
   }
   function archieve(e) {
      e.preventDefault();
      let archieve = document.querySelector('[class=archive-section]>ul');
      let currentArticle = e.target.parentElement.parentElement;
      let articleTitle = currentArticle.children[0];
      let article = document.createElement('li');
      article.innerHTML = articleTitle.innerHTML;
      archieve.appendChild(article);
      
     Array.from(archieve.children)
     .sort((a,b)=>a.innerHTML.localeCompare(b.innerHTML))
     .forEach(element=>{archieve.appendChild(element)});
     currentArticle.remove();

     
   }
   function deleteArticle(e){
      let article=e.target.parentElement.parentElement;
      article.remove();
   }
}


