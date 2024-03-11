[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### Converting an Adjacency Matrix to an Adjacency List:

The runtime complexity of the conversion can be analyzed based on the operations the function performs:

- The convertToAdjList function iterates over each row of the adjacency matrix with .map(), which takes $O(V)$ time, where $V$ is the number of vertices since there are $V$ rows.
- For each row, it uses .flatMap() to iterate over each column, taking $O(V)$ time for each row since there are $V$ columns (in a square matrix).
- The .flatMap() callback checks if an edge exists (hasEdge ? j : []) and constructs an array of connected vertices or an empty array based on the check. This operation is $O(1)$ for each element

Thus, we find the overall runtime complexity to be $O(V^2)$, where $V$ is the number of vertices. This complexity arises from the fact that the function must check every cell in the adjacency matrix to determine if an edge exists between every pair of vertices.

The complexity depends on the number of vertices squared and not directly on the number of edges E, because it still checks the spaces in the matrix where edges do not exist as well as where they do exist. For sparse graphs (graphs with small number of edges), this method is less efficient than it could be if it only had to consider existing edges.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

### Converting an Adjacency List to Adjacency Matrix:

Runtime Analysis:

- The outer .forEach() iterates once for each vertex $O(V)$
- The inner .forEach() iterates for each edge that emerges from any particular vertex. In total, across all iterations, it will run $E$ times, where $E$ is the total number of edges.
- Setting an element in the matrix takes $O(1)$

Therefore, the overall complexity is $O(V + E)$, since every vertex and every edge is considered exactly once here. This is more efficient than the matrix to list conversion for sparse graphs (little number of edges), as it directly correlates to the number of actual connection in the graph, rather than the maximum possible connections.

**Edgeless Graph**: For a graph with no edges, the algorithm simply goes through all the nodes once to initialize the adjacency matrix with zeros, showing that there are no connections between any nodes. This setup is $O(V)$ as it prepares a V x V matrix to represent all possible connections. Since there are no edges ($E = 0$), the part of the algorithm that updates the matrix for each edge is skipped, making the entire process quite efficient for edgeless graphs. To summarize, for a graph without edges, the conversion focuses just on setting up the matrix based on the number of nodes.

