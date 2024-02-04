const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

dp = [0];

const stair = (step) => {
  if (step === 1) {
    dp[step] = input[step];
    return input[step];
  } else if (step === 2) {
    const answer = input[step - 1] + input[step];
    dp[step] = answer;
    return answer;
  } else if (step === 3) {
    const first = input[step - 2] + input[step];
    const second = input[step - 1] + input[step];

    const answer = first < second ? second : first;
    dp[step] = answer;
    return answer;
  } else {
    const first = (dp[step - 2] ?? stair(step - 2)) + input[step];
    const second =
      (dp[step - 3] ?? stair(step - 3)) + input[step - 1] + input[step];

    const answer = first < second ? second : first;
    dp[step] = answer;
    return answer;
  }
};

console.log(stair(input[0]));
