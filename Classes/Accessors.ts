// not requred that class name and file be same

class cust {
    // properties
    private _firstName: string;  //convention
    private _lastName: string;
    
    //constructors
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    //TS offers alternate syntax for getters and setters by defining special: get/ set methods known as Accessors
    public get FirstName(): string {
        return this._firstName;
    }

    public set FirstName(theFirst: string) {
        this._firstName = theFirst;
    }

}
// creating a new instance using the new keyword
let custo = new cust("Hi", "Rohit"); 
// myCustomer.firstName = "Bruce";
// myCustomer.lastName = "Wayne";
console.log(custo.FirstName);
// console.log(myCustomer.getLastName());


