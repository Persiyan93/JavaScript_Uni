function getInfo() {
    let stopId = document.querySelector("#stopId")
    let url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`;
    let httpRequest = new XMLHttpRequest();
    httpRequest.addEventListener('loadend', (e) => {
        let stopName = document.querySelector('#stopName');
        if (httpRequest.status != 200) {
            stopName.innerHTML = 'Error';
        }
        else {
            let info = JSON.parse(httpRequest.responseText);
            stopName.innerHTML = info.name;
            let ulElement = document.querySelector('#buses');
            for (const key in info.buses) {
                let lielement = document.createElement('li');
                lielement.innerHTML = `Bus ${key} arrives in ${info.buses[key]} minutes`;
                ulElement.appendChild(lielement);
            }
        }

    });
    httpRequest.open('GET', url);
    httpRequest.send();
   
    
}