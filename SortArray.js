function solve(array, string) {
    function sortRequirement(string) {
        if (string == 'asc') {
            return (a, b) => a - b;
        }
        else {
            return (a, b) => b - a;
        }
    }
    let sortFunction = sortRequirement(string);
    let resultArray = array.sort(sortFunction);
    return (resultArray);
}
function argumentInfo(...args) {
    let result = {};
    args.forEach(element => {
        let type = typeof (element);
        console.log(`${type}: ${element}`);
        if (!(type in result)) {
            result[type] = 0;
        }
        result[type]++;
    });
    let orderedResult = Object.keys(result).sort((a, b) => result[b] - result[a]);
    orderedResult.forEach(element => {
        console.log(`${element} = ${result[element]}`)
    });
}
function personalBMI(name, age, weight, height) {
    let person = {};
    person.name = name;
    person.personalInfo = {};
    person.BMI = Number((weight / Math.pow(height / 100, 2)).toFixed(0));
    person.status = bmiStatus(person.BMI);
    person.personalInfo.age = Number(age);
    person.personalInfo.weight = Number(weight);
    person.personalInfo.height = Number(height);
    console.log(person.personalInfo);
    function bmiStatus(bmi) {
        if (bmi < 18.5) {
            return 'underweight';
        }
        else if (bmi < 25) {
            return 'normal';
        }
        else if (bmi < 30) {
            return 'overweight';
        }
        else {
            person.recommendation = 'admission required';
            return 'obese';
        }
    }
    return person;
}
(() => {
    let solution = {};
    solution.add = function (firstVector, secondVector) {
        let resultVector = [];
        resultVector[0] = firstVector[0] + secondVector[0];
        resultVector[1] = firstVector[1] + secondVector[1];
        return resultVector;
    };
    solution.multiply = function (vector, scalar) {
        let resultVector = [];
        resultVector[0] = vector[0] * scalar;
        resultVector[1] = vector[1] * scalar;
        return resultVector;
    }
    solution.length = function (vector) {
        return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
    }
    solution.dot = function (firstVector, secondVector) {
        let dot = firstVector[0] * firstVector[1] + secondVector[0] * secondVector[1];
        return dot;
    }
    solution.cross = function (firstVector, secondVector) {
        return firstVector[0] * secondVector[1] - secondVector[0] * firstVector[1];
    }

    return solution;
})();

(() => {

    let products = {};
    products.protein = 0;
    products.carbohydrate = 0;
    products.fat = 0;
    products.flavour = 0;

    function restock(microelement, quantity) {
        products[microelement] += Number(quantity);
        return 'Success';
    }
    function prepare(recipe, quantity) {
        let needfulProducts = {};
        let message = '';
        switch (recipe) {
            case 'apple':
                needfulProducts.carbohydrate = 1;
                needfulProducts.flavour = 2;
                break;
            case 'lemonade':
                needfulProducts.carbohydrate = 10;
                needfulProducts.flavour = 20;
                break;
            case 'burger':
                needfulProducts.carbohydrate = 5;
                needfulProducts.flavour = 3;
                needfulProducts.fat = 7;
                break;
            case 'eggs':
                needfulProducts.protein = 5;
                needfulProducts.fat = 1;
                needfulProducts.flavour = 1;
                break;
            case 'turkey':
                needfulProducts.protein = 10;
                needfulProducts.flavour = 10;
                needfulProducts.carbohydrate = 10;
                needfulProducts.fat = 10;
                break;
        }

        let check = (function () {
            for (const key in needfulProducts) {
                if (products[key] - needfulProducts[key] * quantity < 0) {
                    message = `Error: not enough ${key} in stock`;
                    return false;
                }
            }
            return true;
        })();

        if (check) {
            message = 'Success';
            let keys = Object.keys(needfulProducts);
            keys.forEach(element => {
                products[element] -= needfulProducts[element]*quantity;
            });
        }
        return message;
    }
    function report() {
        let message = `protein=${products.protein} carbohydrate=${products.carbohydrate} fat=${products.fat} flavour=${products.flavour}`
        return message;
    }
    return (comand) => {
        let tokens = comand.split(' ');
        let action = tokens.shift();
        switch (action) {
            case 'restock':
                return restock(tokens[0], tokens[1]);
                break;
            case 'prepare':
                return prepare(tokens[0], tokens[1]);
                break;
            case 'report':
                return report();
                break;
        }
    }
})
result("prepare lemonade 4");  
result('ivan');


let add = (function () {
    let sum = 0
    return function add2(digit){
    sum += digit;
    add2.toString = () => sum;
    return add2;
}


}) ();



