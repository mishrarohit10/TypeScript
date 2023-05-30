"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cricket_1 = require("./Cricket");
var Golf_1 = require("./Golf");
var myGolf = new Golf_1.Golf();
var myCricket = new Cricket_1.Cricket();
console.log(myGolf.getDailyWorkout());
console.log(myCricket.getDailyWorkout());
