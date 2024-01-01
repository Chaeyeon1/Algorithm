const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath, "utf-8");
const N = Number(input);

const getLine = (number) => {
  for (let currentLine = 1; currentLine <= N; currentLine++) {
    const currentLineIndex = number - currentLine;

    if (number - currentLine <= 0) {
      return { currentLine, currentLineIndex };
    }

    number = number - currentLine;
  }
};

const isOddNumberToLine = getLine(N).currentLine % 2 !== 0;
const line = getLine(N).currentLine;
const lineIndex = Math.abs(getLine(N).currentLineIndex);

console.log(
  isOddNumberToLine
    ? `${lineIndex + 1}/${line - lineIndex}`
    : `${line - lineIndex}/${lineIndex + 1}`
);