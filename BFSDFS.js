const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: []
};

// BFS (Queue - Level order)
function bfs(start) {
  let queue = [start];
  let result = [];

  while (queue.length) {
    let node = queue.shift();
    result.push(node);

    for (let n of graph[node]) {
      queue.push(n);
    }
  }

  return result;
}

// DFS (Recursion - Deep first)
function dfs(node, result = []) {
  result.push(node);

  for (let n of graph[node]) {
    dfs(n, result);
  }

  return result;
}

console.log("BFS:", bfs("A"));
console.log("DFS:", dfs("A"));