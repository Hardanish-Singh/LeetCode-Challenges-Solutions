// Leetcode: // Leetcode: https://leetcode.com/problems/spiral-matrix-iii/

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */

const spiralMatrixIII = (rows, cols, rStart, cStart) => {
    // column variables
    let colBegin = cStart;
    let colEnd = cStart;
    // row variables
    let rowBegin = rStart;
    let rowEnd = rStart;

    const result = [];

    // checks if a coordinate is within the matrix
    const isWithInMatrix = (row, col) => row >= 0 && row < rows && col >= 0 && col < cols;

    while (result.length < rows * cols) {
        // Move Right
        if (rowBegin <= rowEnd) {
            while (cStart < colEnd) {
                if (isWithInMatrix(rStart, cStart)) result.push([rStart, cStart]);
                cStart++;
            }
        }
        // Move Bottom
        colEnd++;
        if (colBegin <= colEnd) {
            while (rStart < rowEnd) {
                if (isWithInMatrix(rStart, cStart)) result.push([rStart, cStart]);
                rStart++;
            }
        }
        // Move Left
        rowEnd++;
        if (rowBegin <= rowEnd) {
            while (cStart > colBegin) {
                if (isWithInMatrix(rStart, cStart)) result.push([rStart, cStart]);
                cStart--;
            }
        }
        // Move Top
        colBegin--;
        if (colBegin <= colEnd) {
            while (rStart > rowBegin) {
                if (isWithInMatrix(rStart, cStart)) result.push([rStart, cStart]);
                rStart--;
            }
        }
        rowBegin--;
    }

    return result;
};
