// Leetcode: https://leetcode.com/problems/rotate-image/

const rotate = (matrix: number[][]): void => {
    // Transpose the matrix
    for (let r = 0; r < matrix.length; r++) {
        for (let c = r; c < matrix.length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]; // Swap columns with rows
        }
    }

    // Swap 1st and last columns and 2nd and second last column and so on
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < Math.floor(matrix.length / 2); c++) {
            // Swap columns
            [matrix[r][c], matrix[r][matrix.length - c - 1]] = [matrix[r][matrix.length - c - 1], matrix[r][c]];
        }
    }
};
