const fs = require('node:fs/promises');

function writeTextToFile(txt) {
    fs.writeFile("MyFile.txt", txt).then(
        () => console.log("Writing has completed.")
    );
    console.log("File writing has started.");
}

writeTextToFile("Hello, Node.js asynchronously!");
