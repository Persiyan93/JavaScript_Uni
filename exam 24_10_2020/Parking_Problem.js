class Parking {
    #vehicles;
    constructor(capacity) {
        this.capacity = capacity
        this.#vehicles = [];
    }
    addCar(carModel, carNumber) {
        if (this.#vehicles.length === this.capacity) {
            throw new Error('Not enough parking space.')
        }
        let car = {
            carModel,
            carNumber,
            payed: false
        }
        this.#vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(carNumber) {
        let car=this.#vehicles.filter(x=>x.carNumber===carNumber)[0];
        let indexOfCar = this.#vehicles.indexOf(car);
        if (indexOfCar === -1) {
            throw new Error(`The car, you're looking for, is not found.`);
        }
        let currentCar = this.#vehicles[indexOfCar];
        if (currentCar.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        this.#vehicles.splice(indexOfCar, 1);
        return `${carNumber} left the parking lot.`
    }
    pay(carNumber) {
        let car = this.#vehicles.filter(x => x.carNumber === carNumber)[0];
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`

    }
    getStatistics(carNumber) {
        if (carNumber) {
            let car = this.#vehicles.filter(x => x.carNumber === carNumber)[0];
            let resultMessage = `${car.carModel} == ${car.carNumber} - `;
            if (car.payed) {
                resultMessage += `Has payed`;
            }
            else {
                resultMessage += 'Not payed';
            }
            return resultMessage;
        }
        else {
            let resultMessage = `The Parking Lot has ${this.capacity - this.#vehicles.length} empty spots left.\n`
            let result = this.#vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            result.forEach(car => {
                resultMessage += this.carInfo(car.carNumber) + '\n';

            });
            return resultMessage.trimEnd();
        }
    }
    carInfo(carNumber) {
        let car = this.#vehicles.filter(x => x.carNumber === carNumber)[0];
        let resultMessage = `${car.carModel} == ${car.carNumber} - `;
        if (car.payed) {
            resultMessage += `Has payed`;
        }
        else {
            resultMessage += 'Not payed';
        }
        return resultMessage;
    }
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
