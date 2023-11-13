// Leetcode: https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = (matrix) => {
    let result = [];
    // row variables
    let rowStart = 0;
    let rowEnd = matrix[0].length - 1;
    // column variables
    let columnStart = 0;
    let columnEnd = matrix.length - 1;

    while (rowStart <= rowEnd && columnStart <= columnEnd) {
        // Move Right
        if (columnStart <= columnEnd) {
            for (let i = rowStart; i <= rowEnd; i++) {
                result.push(matrix[columnStart][i]);
            }
        }
        // Move Bottom
        columnStart++;
        if (rowStart <= rowEnd) {
            for (let i = columnStart; i <= columnEnd; i++) {
                result.push(matrix[i][rowEnd]);
            }
        }
        // Move Left
        rowEnd--;
        if (columnStart <= columnEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(matrix[columnEnd][i]);
            }
        }
        // Move Top
        columnEnd--;
        if (rowStart <= rowEnd) {
            for (let i = columnEnd; i >= columnStart; i--) {
                result.push(matrix[i][rowStart]);
            }
        }
        rowStart++;
    }
    return result;
};
