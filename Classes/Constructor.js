"use strict";
var cons = /** @class */ (function () {
    function cons(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    cons.prototype.getName = function () {
        return this._name;
    };
    cons.prototype.getAge = function (theAge) {
        return this._age;
    };
    return cons;
}());
var hello = new cons("rohit", 21);
console.log(hello.getAge + " " + hello.getName);
