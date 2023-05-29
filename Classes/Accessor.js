"use strict";
// not requred that class name and file be same
class cust {
    //constructors
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    //TS offers alternate syntax for getters and setters by defining special: get/ set methods known as Accessors
    get FirstName() {
        return this._firstName;
    }
    set FirstName(theFirst) {
        this._firstName = theFirst;
    }
}
// creating a new instance using the new keyword
let custo = new cust("Hi", "Rohit");
// myCustomer.firstName = "Bruce";
// myCustomer.lastName = "Wayne";
console.log(custo.FirstName);
// console.log(myCustomer.getLastName());
