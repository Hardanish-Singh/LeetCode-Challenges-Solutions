// Leetcode: https://leetcode.com/problems/search-a-2d-matrix/

var searchMatrix = (matrix: number[], target: number): boolean =>
    matrix.flat(Infinity).findIndex((element) => element === target) != -1;
