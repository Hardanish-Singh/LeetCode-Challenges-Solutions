// Leetcode: https://leetcode.com/problems/matrix-diagonal-sum/

const diagonalSum = (matrix: number[][]): number => {
    let total = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (row === column || row + column === matrix.length - 1) {
                total += matrix[row][column];
            }
        }
    }

    return total;
};
