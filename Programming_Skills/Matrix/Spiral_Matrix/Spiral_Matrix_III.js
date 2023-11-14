// Leetcode: // Leetcode: https://leetcode.com/problems/spiral-matrix-iii/

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */

const spiralMatrixIII = (rows, cols, rStart, cStart) => {
    const result = [];
    let sequence;
    let count = 0;

    // Checks if coordinate is within the matrix
    const isWithInMatrix = (row, col) => row >= 0 && row < rows && col >= 0 && col < cols;

    while (result.length < rows * cols) {
        count++;

        // Move Right
        sequence = count;
        while (--sequence >= 0) {
            if (isWithInMatrix(rStart, cStart)) {
                result.push([rStart, cStart]);
            }
            cStart++;
        }

        // Move Bottom
        sequence = count;
        while (--sequence >= 0) {
            if (isWithInMatrix(rStart, cStart)) {
                result.push([rStart, cStart]);
            }
            rStart++;
        }
        count++;

        //Move Left
        sequence = count;
        while (--sequence >= 0) {
            if (isWithInMatrix(rStart, cStart)) {
                result.push([rStart, cStart]);
            }
            cStart--;
        }

        // Move Up
        sequence = count;
        while (--sequence >= 0) {
            if (isWithInMatrix(rStart, cStart)) {
                result.push([rStart, cStart]);
            }
            rStart--;
        }
    }

    return result;
};
