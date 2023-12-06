const fs = require('fs');
const a = fs.readFileSync('file.txt')
console.log(a.toString());