"use strict";
// not requred that class name and file be same
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    //constructors
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    //getter /setters
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this.firstName = theFirst;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setLastName = function (theLast) {
        this.lastName = theLast;
    };
    return Customer;
}());
exports.Customer = Customer;
// creating a new instance using the new keyword
// myCustomer.firstName = "Bruce";
// myCustomer.lastName = "Wayne";
