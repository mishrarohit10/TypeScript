import { Rectangles } from "./Rectangles";
import { Shape } from "./Shape";
let MyRectangle = new Rectangles(0,0,3,7);

let ShapeArray: Shape[] = [];

ShapeArray.push(MyRectangle);

for(let arr of ShapeArray) {
    console.log("Area=" + arr.calculatedArea() + "\n");
}