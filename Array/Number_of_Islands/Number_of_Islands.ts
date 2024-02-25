// Leetcode: https://leetcode.com/problems/number-of-islands/

const numIslands = (grid: string[][]): number => {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let numberOfIslands: number = 0;

    const dfs = (row: number, column: number) => {
        if (row < 0 || row >= grid.length || column < 0 || column >= grid[0].length || grid[row][column] === "0") {
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
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                numberOfIslands++;
                dfs(i, j); // Start DFS from the current land cell
            }
        }
    }

    return numberOfIslands;
};
