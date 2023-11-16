// Function to add two numbers
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Function to greet a user
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Function to find the max number in an array
function findMax(arr: number[]): number {
    return Math.max(...arr);
}

interface Person {
    name: string,
    age: number
}

// Function to update a property in an object
function updateObjectProperty(obj: Person, property: string,
    value: string | number | boolean): Person {

    obj[property] = value;
    return obj;
}

// Using the functions
console.log(addNumbers(10, 5)); // 15
console.log(greet("Alice")); // "Hello, Alice!"
console.log(findMax([1, 3, 2, 5, 4])); // 5
console.log(updateObjectProperty({ name: "Bob", age: 30 }, "age", 31)); // { name: "Bob", age: 31 }

/*
interface Person {
    name: string,
    age: number,
    country: string,
    employed?: boolean
}

let myPerson: Person = {
    name: "John Doe",
    age: 32,
    country: "Finland"
};
*/