function heroes() {

    let canFight = (fighter) => ({

        fight: () => {
            console.log(`${fighter.name} slashes at the foe!`);
            fighter.stamina--;
        }

    });
    let canCast = (mage) => ({

        cast: (spell) => {
            console.log(`${mage.name} cast ${spell}`)
            mage.mana--;
        }


    })
    let fighter = (name) => {
        let currentfighter = {
            name,
            health: 100,
            stamina: 100
        }
        return Object.assign(currentfighter, canFight(currentfighter))
    }
    let mage = function (name) {
        let currentMage = {
            name,
            health: 100,
            mana: 100

        }
        return Object.assign(currentMage, canCast(currentMage));
    }

    return { mage: mage, fighter: fighter };
}
function constructionCrew(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += Number(0.1 * worker.weight * worker.experience);
        worker.dizziness = false;
    }

    return worker;
}
function carFactory(custemerReq) {
    let { model } = custemerReq;
    let resultCar = { model };
    let engine = {}
    if (custemerReq.power <= 90) {
        engine = { power: 90, volume: 1800 };
    }
    else if (custemerReq.power <= 120) {
        engine = { power: 120, volume: 2400 };
    }
    else {
        engine = { power: 200, volume: 3500 };
    }
    let carriage = {};
    switch (custemerReq.carriage) {
        case 'hatchback':
            carriage.type = 'hatchback';
            break;
        case 'coupe':
            carriage.type = 'coupe';
            break;
    }
    carriage.color = custemerReq.color;
    let wheels = [1, 2, 3, 4];
    if (custemerReq.wheelsize % 2 != 0) {
        wheels.fill(custemerReq.wheelsize);
    }
    else {
        wheels.fill(custemerReq.wheelsize - 1);
    }
    resultCar.engine = engine;
    resultCar.carriage = carriage;
    resultCar.wheels = wheels;
    return resultCar;
}
function extensibleObject() {
    let proto = {};
    let myObj = Object.create(proto);
    myObj.extend = (template) => {
        for (const key in template) {
            if (typeof (template[key]) === 'function') {
                proto[key] = template[key];
            }
            else {
                myObj[key] = template[key];
            }
        }
    }
    return myObj;

}
function sortedList() {
    innerarray = [];
    let result = {
        get size() { return innerarray.length },

        add: function(element) {
            innerarray.push(Number(element));
           this.sortArray();
        },
        remove(index) {
            if (index >= 0 && index < innerarray.length) {
                innerarray.splice(index, 1);

            }
        },
        get(index) {
            if (index >= 0 && index < innerarray.length) {
                return innerarray[index];
            }
        },
        sortArray: () => {
            innerarray.sort((a, b) => Number(a) - Number(b));
        }

    }
    return result
}

let mylist = sortedList();
mylist.add(43);
mylist.add(-100);
mylist.add(25);
console.log(mylist.get(0));
