const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath, 'utf-8').split('');
const answer = Number(input.sort((a, b) => b - a).join(''));
console.log(answer);