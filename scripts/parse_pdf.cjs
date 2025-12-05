const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('scripts/Pinheiro_Park_2025.pdf');

pdf(dataBuffer).then(function(data) {
    console.log('--- START PDF CONTENT ---');
    console.log(data.text);
    console.log('--- END PDF CONTENT ---');
}).catch(err => console.error(err));
