export class Shapes {
    constructor(private _x: number, private _y: number) {

    }
    getInfo():string {
        return `x=${this._x}, y=${this._y}`;
    }
}