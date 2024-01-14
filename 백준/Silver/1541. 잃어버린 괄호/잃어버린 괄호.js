const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('-');

const customEval = (value) => {
  return value
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b);
};

console.log(
  input.slice(1).reduce((acc, cur) => {
    return acc - customEval(cur);
  }, customEval(input[0]))
);