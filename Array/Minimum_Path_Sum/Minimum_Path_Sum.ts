// Leetcode: https://leetcode.com/problems/minimum-path-sum/

// Solution 1: Recursion (TLE)
const minPathSum1 = (grid: number[][], row: number = 0, column: number = 0): number => {
    // Out of Bounds/Grid Check
    if (row >= grid.length || column >= grid[0].length) {
        return Number.MAX_VALUE;
    }
    // Base Case / Reach Destination
    if (row === grid.length - 1 && column === grid[0].length - 1) {
        return grid[row][column];
    }

    const moveDown = minPathSum1(grid, row + 1, column);
    const moveRight = minPathSum1(grid, row, column + 1);
    const sum = grid[row][column] + Math.min(moveDown, moveRight);
    return sum;
};

// Solution 2: Recursion with Memoization/Caching
const minPathSum2 = (
    grid: number[][],
    row: number = 0,
    column: number = 0,
    map: Map<string, number> = new Map<string, number>()
): number => {
    // Out of Bounds/Grid Check
    if (row >= grid.length || column >= grid[0].length) {
        return Number.MAX_VALUE;
    }
    // Base Case / Reach Destination
    if (row === grid.length - 1 && column === grid[0].length - 1) {
        return grid[row][column];
    }
    // Memoization/Caching
    const key = `${row},${column}`;
    if (map.has(key)) {
        return map.get(key) as number;
    }

    const moveDown = minPathSum2(grid, row + 1, column, map);
    const moveRight = minPathSum2(grid, row, column + 1, map);
    const sum = grid[row][column] + Math.min(moveDown, moveRight);
    map.set(key, sum);
    return sum;
};
