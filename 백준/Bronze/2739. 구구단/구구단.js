const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath, "utf-8").split(" ").map(Number);

for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}