// Leetcode: https://leetcode.com/problems/spiral-matrix-ii/

/**
 * @param {number} n
 * @return {number[][]}
 */

const generateMatrix = (n) => {
    let result = new Array(n).fill().map(() => new Array(n).fill(0));
    // row variables
    let rowStart = 0;
    let rowEnd = n - 1;
    // column variables
    let columnStart = 0;
    let columnEnd = n - 1;
    let num = 1;

    while (rowStart <= rowEnd && columnStart <= columnEnd) {
        // Move Right
        if (rowStart <= rowEnd) {
            for (let column = columnStart; column <= columnEnd; column++) {
                result[rowStart][column] = num++;
            }
        }
        // Move Bottom
        rowStart++;
        if (columnStart <= columnEnd) {
            for (let row = rowStart; row <= rowEnd; row++) {
                result[row][columnEnd] = num++;
            }
        }
        // Move Left
        columnEnd--;
        if (rowStart <= rowEnd) {
            for (let column = columnEnd; column >= columnStart; column--) {
                result[rowEnd][column] = num++;
            }
        }
        // Move Top
        rowEnd--;
        if (columnStart <= columnEnd) {
            for (let row = rowEnd; row >= rowStart; row--) {
                result[row][columnStart] = num++;
            }
        }
        columnStart++;
    }

    return result;
};
