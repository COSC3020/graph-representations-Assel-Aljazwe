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
- **Matrix Initialization**: First, a $V x V$ matrix is initialized where each cell is set to indicate the absence of an edge, typically done with zeros. This step is vital and it involves iterating through $V^2$ elements to set their initial values. The time complexity for this initialization is $O(V^2)$, as it goes through each cell of the matrix once.
- **Populating the Matrix**: The conversion then iterates over the adjacency list to populate the matrix:
  - The outer .forEach() iterates once for each vertex $O(V)$
  - The inner .forEach() iterates for each edge that emerges from any particular vertex. In       total, across all iterations, it will run $E$ times, where $E$ is the total number of edges. $O(E)$
- **Setting an Element**: For each edge found in the adjacency list, the corresponding element in the matrix is set to indicate the presence of an edge, which takes $O(1)$ per edge operation.

**Conclusion**:
The complexity of turning an adjacency list into a matrix is $O(V^2)$, largely due to the initial step of creating a matrix and filling it with zeros, which involves $V^2$ actions for V vertices. This step overshadows the subsequent process of marking connections between vertices, which adds $O(V+E)$ complexity. Therefore, we arrive to the conclusion that regardless of the graph's sparsity, the setup of the matrix is what primarily determines the conversion's overall complexity, making the entire operation $O(V^2)$.
