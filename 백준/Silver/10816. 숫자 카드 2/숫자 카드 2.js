const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
const N = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const M = input[3].split(' ').map(Number);

const upperBound = (start, end, target) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (N[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
};

const lowerBound = (start, end, target) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (N[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
};

let answer = [];

M.forEach((target) => {
  answer.push(
    upperBound(0, N.length - 1, target) - lowerBound(0, N.length - 1, target)
  );
});
console.log(answer.join('\n'));