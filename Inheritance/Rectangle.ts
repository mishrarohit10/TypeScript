import { Shapes } from "./Shapes";

export class Rectangle extends Shapes{
    constructor(theX:number,theY:number,private _length:number, private _width: number) {
        super(theX,theY);
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }
} 