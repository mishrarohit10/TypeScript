"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shapes_1 = require("./Shapes");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shapes_1.Shapes(10, 90);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());
