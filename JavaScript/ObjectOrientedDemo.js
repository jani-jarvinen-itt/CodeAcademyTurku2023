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
        if (this.engineRunning) {
            this.currentSpeed += 10;
        }
    }

    decelerate() {
        this.currentSpeed -= 10;
        if (this.currentSpeed < 0) {
            this.currentSpeed = 0;
        }
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

// wrong!
myCar.currentSpeed = -500;
myCar.engineRunning = "ABCD";
console.log(myCar);

const friendsCar = new Car();
