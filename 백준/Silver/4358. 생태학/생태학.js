const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n');

let countObject = {};

input.forEach(element => { 
    countObject[element] == null ? countObject[element] = 1 : countObject[element] += 1 
});

console.log(Object.keys(countObject).sort().map(key => `${key} ${(countObject[key] / input.length * 100).toFixed(4)}`).join('\n'));