const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const meetings = [];

for (let i = 1; i <= N; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    meetings.push([start, end]);
}

meetings.sort((a, b) => {
    if (a[1] !== b[1]) {
        return a[1] - b[1];
    }
    return a[0] - b[0];
});

let count = 1;
let endTime = meetings[0][1];

for (let i = 1; i < N; i++) {
    const [start, end] = meetings[i];
    if (start >= endTime) {
        count++;
        endTime = end;
    }
}

console.log(count);
