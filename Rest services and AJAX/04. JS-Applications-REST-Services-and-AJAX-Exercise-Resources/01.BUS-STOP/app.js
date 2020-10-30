function getInfo() {
    let stopId = document.querySelector("#stopId")
    let url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`;
    let httpRequest = new XMLHttpRequest();
    httpRequest.addEventListener('onload',(e)=>{
        console.log(e.currentTarget);
    });
    httpRequest.open('GET',url);
    httpRequest.send();
    console.log(httpRequest);
}