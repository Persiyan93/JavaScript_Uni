function attachEvents() {
    let elements = {
        submitButton: document.querySelector('#submit'),
        nameOfLocation: document.querySelector('#location'),
        currentForeCast: document.querySelector('#current'),
        forecast: document.querySelector('#forecast')
    }

    elements.submitButton.addEventListener('click', getForecast);
    function getForecast() {
        async function getId() {

            let id = await fetch(`https://judgetests.firebaseio.com/locations.json`)
                .then(response => response.json())
                .then(data => data.filter(x => x.name === elements.nameOfLocation.value)[0].code)
                .catch(err => console.log(err));
            let currentCondition = await fetch(`https://judgetests.firebaseio.com/forecast/today/${id}.json`)
                .then(res => res.json())
                .catch(err => console.log(err));
            let upCommingForecast = await fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${id}.json`)
                .then(res => res.json())
                .catch(err => console.log(err));
            console.log(id);
            console.log(currentCondition);
            console.log(upCommingForecast);


            //current forecast
            let divForecast = document.createElement('div');
            divForecast.classList.add('condition');
            let whetherCondition = currentCondition.forecast.condition;
            let conditionSymbol = document.createElement('span');
            conditionSymbol.className='condition symbol';
            conditionSymbol.innerHTML = `${getWhetherIcon(whetherCondition)}`;
            divForecast.appendChild(conditionSymbol);
            elements.currentForeCast.appendChild(divForecast);
            elements.forecast.style.display = 'block';
            //create span about condition
            let highTemperature = currentCondition.forecast.high;
            let lowTemperature = currentCondition.forecast.low;
            let degree = '&#176'
            let spanCondition = document.createElement('span');
            spanCondition.classList.add('condition');
            spanCondition.innerHTML = `<span>${currentCondition.name}</span> 
            <span> ${highTemperature}${degree}/${lowTemperature}${degree}</span>
            <span>${whetherCondition}</span>`;
            divForecast.appendChild(spanCondition)
            Array.from(divForecast.querySelector('.condition').children).forEach(element => {
                element.classList.add('forecast-data')
            });
            console.log(Array.from(divForecast.querySelector('.condition').children).forEach);
            createSpanCondition(currentCondition);





        }
        getId();


    }
    function getWhetherIcon(condition) {
        let icon;
        switch (condition) {
            case 'Sunny':
                icon = '&#x2600'
                break;
            case 'Partly sunny':
                icon = '&#x26C5'
                break;
            case 'Overcast':
                icon = '&#x2601'
                break;
            case 'Rain':
                icon = '&#x2614'
                break;

        }
        return icon;
    }
    function createSpanCondition(currentCondition){
        let whetherCondition = currentCondition.forecast.condition;
        let conditionSymbol = document.createElement('span');
        console.log(whetherCondition);
    }

}

attachEvents();