function solve() {
    let nextStopId = 'depot';
    let stopName;
    let departButton = document.querySelector('#depart');
    let arriveButton = document.querySelector('#arrive');
    let currentstop = document.querySelector('#info>span');


    function depart(e) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener('loadend', () => {
            if (httpRequest.status != 200) {
                currentstop.innerHTML = `Error`;
                departButton.disabled = true;
                arriveButton.disabled = true;
            } else {
                let stop = JSON.parse(httpRequest.responseText);
                stopName = stop.name;
                nextStopId = stop.next;
                currentstop.innerHTML = `Next stop ${stop.name}`;
            }
        });
        let url = `https://judgetests.firebaseio.com/schedule/${nextStopId}.json `;
        httpRequest.open('GET', url);
        httpRequest.send();
        arriveButton.disabled = false;
        departButton.disabled = true;


    }

    function arrive() {
        currentstop.innerHTML = `Arriving at ${stopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();