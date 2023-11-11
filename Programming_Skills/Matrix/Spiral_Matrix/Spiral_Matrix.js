// Leetcode: https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
    let result = [];
    // row variables
    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    // column variables
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // Move Right
        if (rowBegin <= rowEnd) {
            for (let i = colBegin; i <= colEnd; i++) {
                result.push(matrix[rowBegin][i]);
            }
        }
        // Move Bottom
        rowBegin++;
        if (colBegin <= colEnd) {
            for (let i = rowBegin; i <= rowEnd; i++) {
                result.push(matrix[i][colEnd]);
            }
        }
        // Move Left
        colEnd--;
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                result.push(matrix[rowEnd][i]);
            }
        }
        // Move Top
        rowEnd--;
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                result.push(matrix[i][colBegin]);
            }
        }
        colBegin++;
    }
    return result;
};
