// Leetcode: https://leetcode.com/problems/minimum-path-sum/

// Solution 1: Recursion(TLE)
const minPathSum1 = (grid: number[][], row: number = 0, column: number = 0): number => {
    if (row >= grid.length || column >= grid[0].length) {
        return Number.MAX_VALUE;
    }

    if (row === grid.length - 1 && column === grid[0].length - 1) {
        return grid[row][column];
    }

    const moveDown = minPathSum1(grid, row + 1, column);
    const moveRight = minPathSum1(grid, row, column + 1);
    return grid[row][column] + Math.min(moveDown, moveRight);
};

// Solution 2: Recursion with Memoization/Caching
const minPathSum2 = (
    grid: number[][],
    row: number = 0,
    column: number = 0,
    cache: Record<string, number> = {}
): number => {
    if (row >= grid.length || column >= grid[0].length) {
        return Number.MAX_VALUE;
    }

    if (row === grid.length - 1 && column === grid[0].length - 1) {
        return grid[row][column];
    }

    const key = `${row},${column}`;
    if (key in cache) {
        return cache[key];
    }

    const moveDown = minPathSum2(grid, row + 1, column, cache);
    const moveRight = minPathSum2(grid, row, column + 1, cache);
    cache[key] = grid[row][column] + Math.min(moveDown, moveRight);
    return cache[key];
};
