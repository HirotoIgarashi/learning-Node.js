console.log("start program");

const fs = require('./lib/fileSystem.js');

let data;

data = fs.readFileSync(
    './data/westernCalendarToJapaneseCalendar.csv'
);
console.log(data);

console.log("end program");

