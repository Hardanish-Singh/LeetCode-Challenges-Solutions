// Leetcode: https://leetcode.com/problems/duplicate-zeros/

const duplicateZeros = function (arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0); // inserts element at index i
            arr.pop();
            i++;
        }
    }
};
