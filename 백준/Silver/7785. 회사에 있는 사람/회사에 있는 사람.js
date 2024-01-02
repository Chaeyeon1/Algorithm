const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath, 'utf-8').split('\n').slice(1);

const personInCompany = new Set();

input.forEach((log) => {
  const [name, status] = log.split(' ');

  if (status === 'enter') {
    personInCompany.add(name);
  } else {
    personInCompany.delete(name);
  }
});

console.log([...personInCompany].sort().reverse().join('\n'));