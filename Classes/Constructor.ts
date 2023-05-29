class cons {
    constructor(private _name: string, private _age: number) {

    }

    getName():string {
        return this._name;
    }

    getAge(theAge:number): number {
        return this._age;
    }
}

let hello = new cons("rohit",21);
console.log(hello.getAge + " " + hello.getName);
