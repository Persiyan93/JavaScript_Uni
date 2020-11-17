$(async () => {
    let mainTemplate = await (await fetch('./mainTemplate.hbs')).text();
    let monkeyTemplate = document.querySelector('#monkey-template').innerHTML;
    Handlebars.registerPartial('monkey', monkeyTemplate);
    let templateFunc = Handlebars.compile(mainTemplate);
    let generatedHtml=templateFunc({monkeys});
    let sectionElement=document.querySelector('section');
    sectionElement.innerHTML=generatedHtml;
    sectionElement.addEventListener('click',(e)=>{
        if (e.target.tagName=='BUTTON') {
           e.target.parentElement.querySelector('p').removeAttribute('style');
        }
    })
    
   
   
    
   
  
})