const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/date", (req, res) => {
    res.send(new Date().toString());
});

// http://localhost:3000/sum?num1=100&num2=250
app.get("/sum", (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const sum = parseInt(num1) + parseInt(num2);
    res.send(sum.toString());
});

app.get("/persons1", (req, res) => {
    fs.readFile("Persons.csv").then((data) => {
        const persons = data.toString();
        const personToReturn = [];
        // console.log(persons);

        const lines = persons.split("\r\n");
        console.log(lines.length);
        for (let index = 1; index < lines.length; index++) {
            const line = lines[index];
            const parts = line.split(",");
            // console.log(parts[0]);

            personToReturn.push({
                personName: parts[0],
                yearOfBirth: parts[1],
                country: parts[2]
            });
        }

        res.json(personToReturn);
    });
});

app.get("/persons2", (req, res) => {
    const personsData = [];

    reader = fs.createReadStream("Persons.csv")
        .pipe(csv({ headers: true, separator: ',' }))
        .on('data', (row) => {
            // console.log(row);
            let person = {
                personName: row["_0"],
                yearOfBirth: row["_1"],
                country: row["_2"]
            };

            if (person.personName != "PersonName") {
                personsData.push(person);
            }
        })
        .on('end', () => {
            res.json(personsData);
        });
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}/`);
});
