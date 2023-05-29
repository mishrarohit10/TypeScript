// not requred that class name and file be same

class Customer {
    // properties
    private firstName: string;
    private lastName: string;
    
    //constructors
    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

    //getter /setters
    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(theFirst: string): void {
        this.firstName = theFirst;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(theLast:string): void {
        this.lastName = theLast;
    }
}
// creating a new instance using the new keyword
let myCustomer = new Customer("HELLO", "Rohit"); 
// myCustomer.firstName = "Bruce";
// myCustomer.lastName = "Wayne";
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());


