const fs = require('node:fs');

function writeTextToFile(txt) {
    fs.writeFileSync("MyFile.txt", txt);
    console.log("File writing has been completed.");
}

writeTextToFile("Hello, Node.js!");
