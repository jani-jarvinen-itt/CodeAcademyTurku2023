const add = (a, b) => a + b;

const myObject = {
    value: 10,
    multiply: (n) => {
        setTimeout(() => console.log(myObject.value * n), 500);
    }
};

console.log("Calling arrow functions:")
const sum = add(1, 2);
console.log(sum);
myObject.multiply(50);

// wait for a keypress to exit
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.setRawMode(true);

process.stdin.on("data", (key) => {
    console.log("Exiting application.");
    process.exit();
});

process.on("exit", () => {
  process.stdin.setRawMode(false);
  process.stdin.pause();
});
console.log("Press any key to exit...");
