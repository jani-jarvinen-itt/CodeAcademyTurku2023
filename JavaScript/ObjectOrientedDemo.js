// definition of the class
class Car {

    constructor() {
        // initialize properties
        this.make = "";
        this.model = "";
        this.topSpeed = 0;
    }
}


// the usage of the class
const myCar = new Car();
myCar.make = "Toyota";
myCar.model = "Corolla";
myCar.topSpeed = 180;
myCar.someProperty = "ABC"; // new property!
console.log(myCar);

const friendsCar = new Car();
