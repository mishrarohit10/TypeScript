import { Shape } from "./Shape";

export class Rectangles extends Shape{
    constructor(theX:number,theY:number,private _length:number, private _width: number) {
        super(theX,theY);
    }

    getInfo(): string {
        return  ` width=${this._width}, length=${this._length}`;
    }

    calculatedArea(): number {
        return this._width * this._length;
    }
} 