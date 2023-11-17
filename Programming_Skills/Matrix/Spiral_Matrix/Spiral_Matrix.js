// Leetcode: https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = (matrix) => {
    const spiralOrderMatrix = [];
    // Row variables
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    // Column variables
    let columnStart = 0;
    let columnEnd = matrix[0].length - 1;

    while (rowStart <= rowEnd && columnStart <= columnEnd) {
        // Move Right
        if (rowStart <= rowEnd) {
            for (let column = columnStart; column <= columnEnd; column++) {
                spiralOrderMatrix.push(matrix[rowStart][column]);
            }
        }
        // Move Bottom
        rowStart++;
        if (columnStart <= columnEnd) {
            for (let row = rowStart; row <= rowEnd; row++) {
                spiralOrderMatrix.push(matrix[row][columnEnd]);
            }
        }
        // Move Left
        columnEnd--;
        if (rowStart <= rowEnd) {
            for (let column = columnEnd; column >= columnStart; column--) {
                spiralOrderMatrix.push(matrix[rowEnd][column]);
            }
        }
        // Move Top
        rowEnd--;
        if (columnStart <= columnEnd) {
            for (let row = rowEnd; row >= rowStart; row--) {
                spiralOrderMatrix.push(matrix[row][columnStart]);
            }
        }
        columnStart++;
    }

    return spiralOrderMatrix;
};
