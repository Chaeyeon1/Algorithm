const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .slice(2)
  .map((value) => value.split(' ').sort().map(Number));

function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [];
  const result = [];
  let front = 0;

  queue.push(startNode);
  visited.add(startNode);

  while (front < queue.length) {
    const currentNode = queue[front++];
    result.push(currentNode);

    const neighbors = graph[currentNode] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  console.log(result.length - 1);
}

function createGraph(input) {
  const graph = {};

  for (const [node1, node2] of input) {
    if (!graph[node1]) {
      graph[node1] = [];
    }
    if (!graph[node2]) {
      graph[node2] = [];
    }

    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  return graph;
}

bfs(createGraph(input), 1);
