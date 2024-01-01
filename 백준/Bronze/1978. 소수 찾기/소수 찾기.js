const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [_, number] = fs.readFileSync(filePath, "utf-8").split("\n");
let primeNumberCount = 0;

const isPrimeNumber = (number) => {
  let count = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      count += 1;
    }
  }

  // 1은 나누어 떨어지는데 소수이므로 -1 해줘야함 마지막에
  return count - 1 === 0 ? true : false;
};

number.split(" ").map((currentNumber) => {
  primeNumberCount += isPrimeNumber(currentNumber) ? 1 : 0;
});

console.log(primeNumberCount);