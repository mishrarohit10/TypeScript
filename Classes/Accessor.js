"use strict";
// not requred that class name and file be same
var cust = /** @class */ (function () {
    //constructors
    function cust(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(cust.prototype, "FirstName", {
        //TS offers alternate syntax for getters and setters by defining special: get/ set methods known as Accessors
        get: function () {
            return this._firstName;
        },
        set: function (theFirst) {
            this._firstName = theFirst;
        },
        enumerable: false,
        configurable: true
    });
    return cust;
}());
// creating a new instance using the new keyword
var custo = new cust("Hi", "Rohit");
// myCustomer.firstName = "Bruce";
// myCustomer.lastName = "Wayne";
console.log(custo.FirstName);
// console.log(custo.LastName);
