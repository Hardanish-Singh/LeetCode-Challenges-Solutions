// Leetcode: https://leetcode.com/problems/range-addition-ii/

// Solution 1 (Optimized)
var maxCount = (m: number, n: number, ops: number[][]): number => {
    //if no ops => return matrix size
    if (ops.length === 0) {
        return m * n;
    }

    //init matrix
    let minRow = m;
    let minCol = n;

    for (let operation of ops) {
        minRow = Math.min(minRow, operation[0]);
        minCol = Math.min(minCol, operation[1]);
    }

    return minRow * minCol;
};

// Solution 2 (Initialize a 2d matrix with 0s of size m x n (Time Limit Exceeded))
var maxCount = (m: number, n: number, ops: number[][]): number => {
    let matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let operation of ops) {
        for (let i = 0; i < operation[0]; i++) {
            for (let j = 0; j < operation[1]; j++) {
                matrix[i][j] += 1;
            }
        }
    }

    let count = 0;
    let max = matrix.flat(1).reduce((a, b) => Math.max(a, b));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === max) {
                count++;
            }
        }
    }

    return count;
};
