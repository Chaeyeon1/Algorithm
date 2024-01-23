const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = input[0];
const maze = input.slice(1).map((row) => row.split('').map(Number));
let visited = Array.from({ length: N }, () =>
  Array.from({ length: N }).fill(false)
);
const answer = [];

function bfs(startNode) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [];
  let count = 0;
  let front = 0;

  const enqueue = (x = 0, y = 0) => {
    queue.push({ x, y });
    count += 1;
  };

  enqueue(startNode.x, startNode.y);
  visited[startNode.x][startNode.y] = true;

  while (front < queue.length) {
    const { x: nowX, y: nowY } = queue[front++];

    for (let i = 0; i < 4; i++) {
      const nextX = nowX + dx[i];
      const nextY = nowY + dy[i];

      if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) {
        continue;
      } else if (maze[nextX][nextY] === 0) {
        continue;
      }

      if (maze[nextX][nextY] === 1 && visited[nextX][nextY] === false) {
        enqueue(nextX, nextY);
        visited[nextX][nextY] = true;
      }
    }
  }

  answer.push(count);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (maze[i][j] === 1 && visited[i][j] === false) {
      bfs({ x: i, y: j });
    }
  }
}

console.log(answer.length);
console.log(
  answer
    .sort((a, b) => a - b)
    .join('\n')
    .trim()
);
