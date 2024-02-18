// Leetcode: https://leetcode.com/problems/unique-paths/

// Solution 1: Recursion (TLE)
var uniquePaths1 = (m: number, n: number, row: number = 0, column: number = 0): number => {
    // Base Case / Reach Destination
    if (row === m - 1 && column === n - 1) {
        return 1;
    }
    // Out of Bounds/Grid Check
    if (row >= m || column >= n) {
        return 0;
    }

    const moveDown = uniquePaths1(m, n, row + 1, column);
    const moveRight = uniquePaths1(m, n, row, column + 1);
    return moveDown + moveRight;
};

// Solution 1: Recursion with Memoization/Caching
var uniquePaths2 = (
    m: number,
    n: number,
    row: number = 0,
    column: number = 0,
    cache: Record<string, number> = {}
): number => {
    // Base Case / Reach Destination
    if (row === m - 1 && column === n - 1) {
        return 1;
    }
    // Out of Bounds/Grid Check
    if (row >= m || column >= n) {
        return 0;
    }
    // Memoization/Caching
    const key = `${row},${column}`;
    if (key in cache) {
        return cache[key];
    }

    const moveDown = uniquePaths2(m, n, row + 1, column, cache);
    const moveRight = uniquePaths2(m, n, row, column + 1, cache);
    cache[key] = moveDown + moveRight;
    return cache[key];
};

// Solution 3: Dynamic Programming
var uniquePaths3 = (m: number, n: number): number => {
    // Construct a 2D Array of size m x n with default array values as 1
    const matrix = Array(m);
    for (let i = 0; i < m; i++) {
        matrix[i] = Array(n).fill(1);
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    return matrix[m - 1][n - 1];
};
