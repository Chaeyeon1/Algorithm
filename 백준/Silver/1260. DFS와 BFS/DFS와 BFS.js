const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const startNode = Number(input[0].split(' ')[2]);
const graph = input.slice(1).map((value) => value.split(' ').map(Number));

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

  console.log(result.join(' '));
}

function dfs(graph, startNode) {
  const stack = [startNode];
  const visited = new Set();
  const result = [];

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (!visited.has(currentNode)) {
      result.push(currentNode);
      visited.add(currentNode);

      const neighbors = graph[currentNode] || [];
      for (const neighbor of neighbors.reverse()) {
        stack.push(neighbor);
      }
    }
  }

  console.log(result.join(' '));
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

    graph[node1].sort((a, b) => a - b);
    graph[node2].sort((a, b) => a - b);
  }

  return graph;
}

dfs(createGraph(graph), startNode);
bfs(createGraph(graph), startNode);
