const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split(' ').map(Number);
let [A, B] = input;
let count = 0;

while (A < B) {
  if (String(B).slice(-1) === '1') {
    B = Number(String(B).slice(0, -1));
    count++;
  } else if (B % 2 === 0) {
    B = parseInt(B / 2);
    count++;
  } else {
    break;
  }
}

console.log(A === B ? count + 1 : -1);