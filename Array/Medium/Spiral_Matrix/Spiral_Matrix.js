// Leetcode: https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
    let resultArray = [];

    const moveRight = () => {
        if (matrix.length === 0) {
            return;
        }
        const row = 0;
        for (let column = 0; column < matrix[row].length; column++) {
            resultArray.push(matrix[row][column]);
        }
        matrix.splice(row, 1);
    };

    const moveBottom = () => {
        if (matrix.length === 0) {
            return;
        }
        for (let row = 0; row < matrix.length; row++) {
            let column = matrix[row].length - 1;
            resultArray.push(matrix[row][column]);
        }
        for (let row = 0; row < matrix.length; row++) {
            matrix[row].splice(-1, 1);
            if (matrix[row].length === 0) {
                matrix.splice(row, 1);
                row--;
            }
        }
    };

    const moveLeft = () => {
        if (matrix.length === 0) {
            return;
        }
        let last = matrix.length - 1;
        for (let i = matrix[last].length - 1; i >= 0; i--) {
            resultArray.push(matrix[last][i]);
        }
        matrix.splice(last, 1);
    };

    const moveUp = () => {
        if (matrix.length === 0) {
            return;
        }
        for (let i = matrix.length - 1; i >= 0; i--) {
            resultArray.push(matrix[i][0]);
        }

        for (let i = matrix.length - 1; i >= 0; i--) {
            matrix[i].splice(0, 1);
            if (matrix[i].length === 0) {
                matrix.splice(i, 1);
            }
        }
    };

    while (matrix.length > 0) {
        moveRight();
        moveBottom();
        moveLeft();
        moveUp();
    }

    return resultArray;
};
