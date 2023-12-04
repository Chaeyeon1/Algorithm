const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
let arr = [];
let totalSecond = Number.MAX_VALUE;
let targetGround = 0;

input.slice(1).forEach((row) => {
  row.split(" ").forEach((item) => {
    arr.push(+item);
  });
});

for (let standardNumber = 256; standardNumber >= 0; standardNumber--) {
  let currentSecond = 0;
  let useGround = 0;
  let maxGround = Number(input[0].split(" ")[2]);

  arr.forEach((groundCount) => {
    if (groundCount < standardNumber) {
      currentSecond += (standardNumber - groundCount) * 1;
      useGround += standardNumber - groundCount;
    } else if (groundCount > standardNumber) {
      currentSecond += (groundCount - standardNumber) * 2;
      maxGround += groundCount - standardNumber;
    }
  });

  if (currentSecond < totalSecond && useGround <= maxGround) {
    totalSecond = currentSecond;
    targetGround = standardNumber;
  }
}

console.log(totalSecond, targetGround);

// const N = input[0];
// const M = input[1];
// const B = input[2];
// console.log(input, N, M, B);

// const prevArray = [0, 100, 200, 300];
// const currentNumber = 223;
// let finalNumber = 0;

// prevArray.forEach((number) => {
//   if (number < currentNumber && finalNumber < number) {
//     finalNumber = number;
//   }
// });

// console.log(finalNumber);
