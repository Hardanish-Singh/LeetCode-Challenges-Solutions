// Leetcode: https://leetcode.com/problems/duplicate-zeros/

const duplicateZeros = (arr: number[]): void => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0); // arr.splice(index, 0, item); will insert item into arr at the specified index (deleting 0 items first, that is, it's just an insert).
            arr.pop();
            i++;
        }
    }
};
