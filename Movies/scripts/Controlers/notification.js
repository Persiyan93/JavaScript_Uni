export default function () {    

    console.log(document.querySelector('#errorBox').parentElement);
    document.querySelector('#errorBox').parentElement.removeAttribute('style');
    console.log(document.querySelector('#errorBox').parentElement);
}