class Bank {
    #bankName
    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer(customer) {
        if (this.allCustomers.some(x => x.firstName === customer.firstName && x.lastName === customer.lastName)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        let proto = { transaction: [],totalMoney : 0 }

        Object.setPrototypeOf(customer, proto);
        this.allCustomers.push(customer);
        return customer;
    }
    depositMoney(personalId, amount) {
        let person = this.allCustomers.filter(x => x.personalId === personalId)[0];
        if (!person) {
            throw new Error('We have no customer with this ID!');
        }
        
        person.totalMoney += amount;

        person.transaction.push(`${person.firstName} ${person.lastName} made deposit of ${amount}$!`);
        return `${person.totalMoney}$`
    }
    withdrawMoney(personalId, amount) {
        let person = this.allCustomers.filter(x => x.personalId === personalId)[0];
        if (!person) {
            throw new Error('We have no customer with this ID!');
        }
        if (person.totalMoney < amount) {
            throw new console.error(`${perosn.firstName} ${perosn.lastName} does not have enough money to withdraw that amount!`);
        }
        person.totalMoney -= amount;
        person.transaction.push(`${person.firstName} ${person.lastName} withdrew ${amount}$!`);
        return `${person.totalMoney}$`
    }
    customerInfo(personalId) {
        let person = this.allCustomers.filter(x => x.personalId === personalId)[0];
        if (!person) {
            throw new Error('We have no customer with this ID!');
        }
        let resultMessage = '';
        resultMessage += `Bank name: ${this.#bankName}\n`;
        resultMessage += `Customer name: ${person.firstName} ${person.lastName}\n`;
        resultMessage += `Customer ID: ${person.personalId}\n`;
        resultMessage += `Total Money: ${person.totalMoney}$\n`;
        resultMessage += `Transactions:`;
        for (let i = person.transaction.length - 1; i > -1; i--) {
            resultMessage +='\n'+ (i + 1) + '. ' + person.transaction[i] ;
        }
        return resultMessage;

    }
}
let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));
console.log(bank.customerInfo(4151596));


bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
