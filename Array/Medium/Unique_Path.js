// Leetcode: https://leetcode.com/problems/unique-paths/

/**
 * @param { number } m
 * @param { number } n
 * @return { number }
 */

function uniquePaths(m, n) {
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
}
