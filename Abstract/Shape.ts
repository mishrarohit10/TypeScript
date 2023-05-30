export abstract class Shape {
    constructor(private _x: number, private _y: number) {

    }
    abstract calculatedArea(): number;
}