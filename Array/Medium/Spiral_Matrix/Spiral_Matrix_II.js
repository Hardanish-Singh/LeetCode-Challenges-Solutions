// Leetcode: https://leetcode.com/problems/spiral-matrix-ii/

/**
 * @param { number } n
 * @return { number[][] }
 */

var generateMatrix = function (n) {
    let result = new Array(n).fill().map(() => new Array(n).fill(0));
    // row variables
    let rowBegin = 0;
    let rowEnd = n - 1;
    // column variables
    let colBegin = 0;
    let colEnd = n - 1;

    let num = 1;
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // Move Right
        for (let i = colBegin; i <= colEnd; i++) {
            result[rowBegin][i] = num;
            num++;
        }
        // Move Bottom
        rowBegin++;
        for (let i = rowBegin; i <= rowEnd; i++) {
            result[i][colEnd] = num;
            num++;
        }
        // Move Left
        colEnd--;
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                result[rowEnd][i] = num;
                num++;
            }
        }
        // // Move Top
        rowEnd--;
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                result[i][colBegin] = num;
                num++;
            }
        }
        colBegin++;
    }
    return result;
};
