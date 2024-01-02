const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath, 'utf-8').split('\n').slice(1);
const array = [];

input.forEach((information) => {
  const [name, korean, english, math] = information.split(' ');

  array.push({
    name,
    korean: Number(korean),
    english: Number(english),
    math: Number(math),
  });
});

const sortedArray = array.sort((a, b) => {
  const koreanComparison = b.korean - a.korean;
  const englishComparison = a.english - b.english;
  const mathComparison = b.math - a.math;

  if (koreanComparison !== 0) {
    return koreanComparison;
  } else if (englishComparison !== 0) {
    return englishComparison;
  } else if (mathComparison !== 0) {
    return mathComparison;
  } else {
    for (let i = 0; i < 10; i++) {
      if (a.name.charCodeAt(i) === b.name.charCodeAt(i)) {
        continue;
      } else {
        return a.name.charCodeAt(i) - b.name.charCodeAt(i);
      }
    }
  }
});

// sortedArray.forEach((info) => console.log(info.name));
let answer = '';

for (let i = 0; i < sortedArray.length; i++) {
  answer += sortedArray[i].name + '\n';
}

console.log(answer);