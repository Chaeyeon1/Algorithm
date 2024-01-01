const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath, "utf-8").split(" ").map(Number);

const answer = input[0] + input[1];

console.log(answer);