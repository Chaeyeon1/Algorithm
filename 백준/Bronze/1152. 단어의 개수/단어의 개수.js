const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const wordsArr = fs.readFileSync(filePath, "utf-8").trim().split(" ");
let countOfWords = 0;

for (let i = 0; i < wordsArr.length; i++) {
  if (wordsArr[i] !== "") {
    countOfWords++;
  }
}

console.log(countOfWords);