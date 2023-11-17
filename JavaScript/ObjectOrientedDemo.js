// definition of the class
class Car {

    constructor() {
        // initialize properties
        this.make = "";
        this.model = "";
        this.topSpeed = 0;

        this.engineRunning = false;
        this.currentSpeed = 0;
    }

    startEngine() {
        this.engineRunning = true;
    }

    stopEngine() {
        this.engineRunning = false;
    }
    
    accelerate() {
        this.currentSpeed += 10;
    }
    
    decelerate() {
        this.currentSpeed -= 10;
    }
}


// the usage of the class
const myCar = new Car();
myCar.make = "Toyota";
myCar.model = "Corolla";
myCar.topSpeed = 180;
myCar.someProperty = "ABC"; // new property!
myCar.startEngine();
myCar.accelerate();
console.log(myCar);

const friendsCar = new Car();
