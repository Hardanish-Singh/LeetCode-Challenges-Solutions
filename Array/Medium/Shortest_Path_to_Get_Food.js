// Leetcode: https://leetcode.com/problems/shortest-path-to-get-food/

/* 
        Important Tip: Use a Breadth-First Search (BFS) instead of Depth-First Search (DFS). BFS is generally more efficient for finding the shortest path in a graph or grid.
*/

// Solution 1: BFS
var getFood = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let startRow = 0;
    let startCol = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "*") {
                startRow = i;
                startCol = j;
                break;
            }
        }
    }

    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const visited = new Map();
    let minLength = Number.MAX_VALUE;

    const bfs = (i, j) => {
        let queue = [[i, j, 0]];
        visited.set(`${i},${j}`, true);

        while (queue.length > 0) {
            let [x, y, steps] = queue.shift();

            if (grid[x][y] === "#") {
                minLength = Math.min(minLength, steps);
                return;
            }

            for (let [dx, dy] of directions) {
                let row = x + dx;
                let column = y + dy;

                if (
                    row >= 0 &&
                    row < m &&
                    column >= 0 &&
                    column < n &&
                    !visited.has(`${row}${column}`) &&
                    grid[row][column] !== "X"
                ) {
                    queue.push([row, column, steps + 1]);
                    visited.set(`${row},${column}`, true);
                }
            }
        }
    };

    bfs(startRow, startCol);

    return minLength === Number.MAX_VALUE ? -1 : minLength;
};

// Solution 2: DFS (TLE)
var getFood = (grid) => {
    let stack = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "*") {
                stack.push(i);
                stack.push(j);
                break;
            }
        }
    }

    let minLength = Number.MAX_VALUE;
    let m = grid.length;
    let n = grid[0].length;
    const dfs = (i, j, steps) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == "X") return;

        if (grid[i][j] == "#") {
            minLength = Math.min(minLength, steps);
            return;
        }

        const original = grid[i][j]; // Save visited cell
        grid[i][j] = "X"; // Simply replace "original cell" with a "X" when visiting an empty cell and put back the "original cell" after returning. This will avoid revisiting the same cell again.
        dfs(i + 1, j, steps + 1);
        dfs(i - 1, j, steps + 1);
        dfs(i, j + 1, steps + 1);
        dfs(i, j - 1, steps + 1);
        // After backtrack free visited cell to Original Position for other possible paths
        grid[i][j] = original;
    };

    dfs(stack[0], stack[1], 0);

    return minLength === Number.MAX_VALUE ? -1 : minLength;
};
