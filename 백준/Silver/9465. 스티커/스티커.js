const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const testCase = Number(input[0]);

for (let i = 0; i < testCase; i++) {
  const n = Number(input[1]);
  const arr = [];
  arr.push(input[2].split(' ').map(Number));
  arr.push(input[3].split(' ').map(Number));

  const dp = Array.from(new Array(2), () => new Array(n).fill(0));
  let maxNumber = 0;

  const sticker = (row, column) => {
    const currentValue = arr[row][column];

    if (row === 0 && column === 0) return currentValue;
    else if (row === 1 && column === 0) return arr[1][0];
    else if (row === 0 && column === 1) return arr[1][0] + currentValue;
    else if (row === 1 && column === 1) return arr[0][0] + currentValue;
    else {
      const oppositeRow = row === 1 ? 0 : 1;
      const first = dp[oppositeRow][column - 2];
      const second = dp[oppositeRow][column - 1];
      const max = (dp[row][column] = Math.max(first, second)) + currentValue;

      return max;
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2; j++) {
      const answer = sticker(j, i);
      dp[j][i] = answer;
      maxNumber = Math.max(maxNumber, answer);
    }
  }

  console.log(maxNumber);

  input = input.slice(3);
}
