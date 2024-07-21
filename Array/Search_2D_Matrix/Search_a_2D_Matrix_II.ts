// Leetcode: https://leetcode.com/problems/search-a-2d-matrix-ii/

// Solution 1
var searchMatrix = (matrix: number[][], target: number): boolean => {
    for (let row of matrix) {
        if (row[0] > target) {
            break;
        }
        if (row.includes(target)) {
            return true;
        }
    }
    return false;
};

// Solution 2
var searchMatrix = (matrix: number[][], target: number): boolean => {
    let rows = matrix.length - 1;
    let cols = 0;
    while (rows >= 0 && cols <= matrix[0].length - 1) {
        if (matrix[rows][cols] === target) return true;
        else if (matrix[rows][cols] > target) rows--;
        else if (matrix[rows][cols] < target) cols++;
    }
    return false;
};
