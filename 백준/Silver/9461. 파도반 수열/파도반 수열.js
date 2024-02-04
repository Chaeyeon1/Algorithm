const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input[0]; i++) {
  const dp = [];

  const triangle = (N) => {
    if (N === 0 || N === 1 || N === 2 || N == 3) {
      dp[N] = 1;
      return 1;
    } else {
      const answer =
        (dp[N - 2] ?? triangle(N - 2)) + (dp[N - 3] ?? triangle(N - 3));
      dp[N] = answer;
      return answer;
    }
  };

  console.log(triangle(input[i + 1] * 1));
}
