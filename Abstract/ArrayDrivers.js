"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangles_1 = require("./Rectangles");
var MyRectangle = new Rectangles_1.Rectangles(0, 0, 3, 7);
var ShapeArray = [];
ShapeArray.push(MyRectangle);
for (var _i = 0, ShapeArray_1 = ShapeArray; _i < ShapeArray_1.length; _i++) {
    var arr = ShapeArray_1[_i];
    console.log("Area=" + arr.calculatedArea() + "\n");
}
