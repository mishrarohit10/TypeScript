import { Shapes } from "./Shapes";

export class Circle extends Shapes {
    constructor(theX: number, theY: number, private _radius: number) {
        super(theX,theY);
    }

    getInfo(): string {
        return super.getInfo() + `,radius=${this._radius}`;
    }
}