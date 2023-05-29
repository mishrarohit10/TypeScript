"use strict";
// not requred that class name and file be same
class Customer {
    //constructors
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    //getter /setters
    getFirstName() {
        return this.firstName;
    }
    setFirstName(theFirst) {
        this.firstName = theFirst;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(theLast) {
        this.lastName = theLast;
    }
}
// creating a new instance using the new keyword
let myCustomer = new Customer("HELLO", "Rohit");
// myCustomer.firstName = "Bruce";
// myCustomer.lastName = "Wayne";
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
