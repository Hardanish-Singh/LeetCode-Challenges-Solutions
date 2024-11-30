// Leetcode: https://leetcode.com/problems/largest-local-values-in-a-matrix/

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

const largestLocal = (grid) => {
    const m = grid.length - 2; // (n - 2)
    const n = grid[0].length - 2; // (n - 2)
    const matrix = Array.from({ length: m }, () => new Array(n).fill(0)); // intialized a 2D array of size (n - 2) x (n - 2).

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            const window = Array.from(grid.slice(row, row + 3), (mat) => mat.slice(col, col + 3)); // 2D window array for size (row + 3) x (col + 3)
            matrix[row][col] = Math.max(...window.flat(Infinity)); // find the largest value in 2D window array
        }
    }

    return matrix;
};
