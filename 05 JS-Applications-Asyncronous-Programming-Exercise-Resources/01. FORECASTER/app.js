function attachEvents() {
    let elements = {
        submitButton: document.querySelector('#submit'),
        nameOfLocation: document.querySelector('#location'),
        currentForeCast:document.querySelector('#current')
    }

    elements.submitButton.addEventListener('click', getForecast);
    function getForecast() {
        async function getId() {

            let id = await fetch(`https://judgetests.firebaseio.com/locations.json`)
                .then(response => response.json())
                .then(data => data.filter(x => x.name === elements.nameOfLocation.value)[0].code    )
                .catch(err => console.log(err));
            let currentCondition = await fetch(`https://judgetests.firebaseio.com/forecast/today/${id}.json`)
                .then(res => res.json())
                .catch(err => console.log(err));
            let upCommingForecast = await fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${id}.json`)
                .then(res => res.json())
                .catch(err => console.log(err));
            let divForecast=document.createElement('div');
            divForecast.classList.add('condition');

        }


    }
}

attachEvents();