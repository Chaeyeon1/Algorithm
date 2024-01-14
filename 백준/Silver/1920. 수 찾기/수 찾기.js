const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
const N = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const M = input[3].split(' ').map(Number);

const binarySearch = (start, end, target) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (N[mid] === target) {
      return 1;
    } else if (N[mid] > target) {
      end = mid - 1;
    } else if (N[mid] < target) {
      start = mid + 1;
    }
  }

  return 0;
};

let answer = [];

M.forEach((target) => {
  answer.push(binarySearch(0, N.length - 1, target));
});
console.log(answer.join('\n'));