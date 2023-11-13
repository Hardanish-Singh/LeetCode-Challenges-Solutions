// Leetcode: https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = (matrix) => {
    let result = [];
    // row variables
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    // column variables
    let columnStart = 0;
    let columnEnd = matrix[0].length - 1;

    while (rowStart <= rowEnd && columnStart <= columnEnd) {
        // Move Right
        if (rowStart <= rowEnd) {
            for (let column = columnStart; column <= columnEnd; column++) {
                result.push(matrix[rowStart][column]);
            }
        }
        // Move Bottom
        rowStart++;
        if (columnStart <= columnEnd) {
            for (let row = rowStart; row <= rowEnd; row++) {
                result.push(matrix[row][columnEnd]);
            }
        }
        // Move Left
        columnEnd--;
        if (rowStart <= rowEnd) {
            for (let column = columnEnd; column >= columnStart; column--) {
                result.push(matrix[rowEnd][column]);
            }
        }
        // Move Top
        rowEnd--;
        if (columnStart <= columnEnd) {
            for (let row = rowEnd; row >= rowStart; row--) {
                result.push(matrix[row][columnStart]);
            }
        }
        columnStart++;
    }

    return result;
};
