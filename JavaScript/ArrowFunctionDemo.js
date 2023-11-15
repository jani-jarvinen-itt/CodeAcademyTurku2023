function add(a, b) {
    return a + b;
}

const myObject = {
    value: 10,
    multiply: function (n) {
        setTimeout(function () {
            console.log(this.value * n);
        }.bind(this), 500);
    }
};

const sum = add(1, 2);
console.log(sum);
myObject.multiply(50);
