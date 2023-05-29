import { Shapes } from "./Shapes";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shapes(10,90);
console.log(myShape.getInfo());

let myCircle = new Circle(5,10,20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0,0,3,7);
console.log(myRectangle.getInfo());


