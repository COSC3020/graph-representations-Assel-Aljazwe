function convertToAdjList(adjMatrix) {
    const adjList = adjMatrix.map((row, i) => 
        row.flatMap((hasEdge, j) => hasEdge ? j : []));
    return adjList;
}

function convertToListToMatrix(adjList) {
    const size = adjList.length;
    const adjMatrix = Array.from({length: size}, () => Array(size).fill(0));
    
    adjList.forEach((edges, i) => {
        edges.forEach(j => {
            adjMatrix[i][j] = 1;
        });
    });
    
    return adjMatrix;
}
