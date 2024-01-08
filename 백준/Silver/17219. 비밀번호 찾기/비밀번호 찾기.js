const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n');
const [addressCount, passwordCount] = input[0].split(' ');
const addressMap = {};

input.splice(1, addressCount).map((row) => {
  const [address, password] = row.split(' ');

  addressMap[address] = password;
});

let answer = '';
input.slice(1).map((value) => {
  answer += addressMap[value] + '\n';
});

console.log(answer.trim());