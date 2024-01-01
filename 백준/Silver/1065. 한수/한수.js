const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath, "utf-8");
const N = Number(input);
let arithmeticSequence = 0;

for (let i = 1; i <= N; i++) {
  if (i < 100) {
    arithmeticSequence += 1;
  } else if (i < 1000) {
    const firstNumber = Math.floor(i / 100);
    const secondNumber = Math.floor((i % 100) / 10);
    const lastNumber = Math.floor(i % 10);

    const differenceSame =
      secondNumber - firstNumber === lastNumber - secondNumber;

    if (differenceSame) {
      arithmeticSequence += 1;
    }
  }
}

console.log(arithmeticSequence);