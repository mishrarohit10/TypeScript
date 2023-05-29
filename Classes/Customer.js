// not requred that class name and file be same
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
// creating a new instance using the new keyword
var myCustomer = new Customer("HELLO", "Rohit");
// myCustomer.firstName = "Bruce";
// myCustomer.lastName = "Wayne";
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
