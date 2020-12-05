const elements = {
    errorBox: document.querySelector('#errorBox').parentElement,
    successBox: document.querySelector('#successBox').parentElement
}

export function successMessage(message) {
    elements.successBox.setAttribute('style', 'display: block');
    elements.successBox.children[0].innerHTML = message;
    document.addEventListener('click', hideMessage(elements.successBox));
    setTimeout(() => { hideMessage(elements.successBox) }, 5000);

}
function hideMessage(element) {
    console.log('hide')
    element.setAttribute('style', 'display : none')
}


export function errorMessage(message) {
    console.log(message)
    elements.errorBox.setAttribute('style', 'display: block');
    elements.errorBox.children[0].innerHTML = message;
    document.addEventListener('click', () => {hideMessage(elements.errorBox)});
    setTimeout(() => { hideMessage(elements.errorBox) }, 5000);

}



