// Leetcode: https://leetcode.com/problems/duplicate-zeros/

const insertZero = (arr: Array<number>, position: number): void => {
        for (let i = arr.length - 2; i >= position; i--) {
                arr[i + 1] = arr[i];
        }
        arr[position] = 0;
};

const duplicateZeros = (arr: Array<number>): void => {
        for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] === 0) {
                        insertZero(arr, i + 1);
                        i++;
                }
        }
};
