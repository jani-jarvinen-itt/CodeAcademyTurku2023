function compareValues(a, b) {
    const result1 = (a == b);
    const result2 = (a === b);
    console.log(`Comparing ${a} to ${b}.`);

    return {
        looseEquality: result1,
        strictEquality: result2
    };
}

console.log(compareValues(5, "5"));
console.log(compareValues(0, false));
console.log(compareValues(1, true));
console.log(compareValues(100, 100.0));
console.log(compareValues(NaN, null));
console.log(compareValues(null, undefined));

/*
if (5 === "5") {
    console.log("Values are equal!");
}
else {
    console.log("Values are NOT equal.");
}
*/