// definition of the class
class Car {

    // public properties
    make: string;
    model: string;
    topSpeed: number;

    // private fields
    #engineRunning = false;
    #currentSpeed = 0;

    constructor() {
        // initialize properties
        this.make = "";
        this.model = "";
        this.topSpeed = 0;
    }

    startEngine() {
        this.#engineRunning = true;
    }

    stopEngine() {
        this.#engineRunning = false;
    }

    accelerate() {
        if (this.#engineRunning) {
            this.#currentSpeed += 10;

            if (this.#currentSpeed > this.topSpeed) {
                this.#currentSpeed = this.topSpeed;
            }
        }
    }

    decelerate() {
        this.#currentSpeed -= 10;
        if (this.#currentSpeed < 0) {
            this.#currentSpeed = 0;
        }
    }
}


// the usage of the class
const myCar = new Car();
myCar.make = "Toyota";
myCar.model = "Corolla";
myCar.topSpeed = 180;
// myCar.someProperty = "ABC"; // new property!
myCar.startEngine();
myCar.accelerate();

// private fields cannot be set from the outside
// myCar.#currentSpeed = -500;
// myCar.#engineRunning = "ABCD";
console.log(myCar);

const friendsCar = new Car();
