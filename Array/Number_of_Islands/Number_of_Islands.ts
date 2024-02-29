// Leetcode: https://leetcode.com/problems/number-of-islands/

const numIslands = (grid: string[][]): number => {
    let numberOfIslands: number = 0;
    const m = grid.length;
    const n = grid[0].length;

    const dfs = (row: number, column: number) => {
        if (row < 0 || row >= m || column < 0 || column >= n || grid[row][column] === "0") {
            return 0;
        }

        grid[row][column] = "0"; // Mark the current cell as visited
        // Explore adjacent cells
        dfs(row - 1, column); // move up
        dfs(row + 1, column); // move down
        dfs(row, column - 1); // move left
        dfs(row, column + 1); // move right
    };

    // Iterate through the grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                numberOfIslands++;
                dfs(i, j); // Start DFS from the current land cell
            }
        }
    }

    return numberOfIslands;
};
