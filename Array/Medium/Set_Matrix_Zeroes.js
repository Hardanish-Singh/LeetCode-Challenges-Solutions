// Leetcode: https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param { number[][] } matrix
 * @return { void } Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][j] = "X";
                let row = 0;
                let column = 0;
                // Change the entire row to 0
                while (column <= matrix[i].length - 1) {
                    if (matrix[i][column] != 0) {
                        matrix[i][column] = "X";
                    }
                    column++;
                }
                // Change the entire column to 0
                while (row <= matrix.length - 1) {
                    if (matrix[row][j] != 0) {
                        matrix[row][j] = "X";
                    }
                    row++;
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === "X") {
                matrix[i][j] = 0;
            }
        }
    }
};
