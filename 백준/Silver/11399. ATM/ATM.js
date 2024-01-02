const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath, 'utf-8').split('\n')[1];
const durationTime = input.split(' ').sort((a, b) => a - b);

let prevTotalMinute = 0;
let answer = 0;

durationTime.forEach((time) => {
  prevTotalMinute = prevTotalMinute + Number(time);
  answer += prevTotalMinute;
});

console.log(answer);