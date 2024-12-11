// Leetcode: https://leetcode.com/problems/special-array-i/

// Solution 1
var isArraySpecial = (nums: number[]): boolean => {
    for (let i = 1; i < nums.length; ++i) {
        const parity_1 = nums[i] % 2;
        const parity_2 = nums[i - 1] % 2;
        if (parity_1 === parity_2) {
            return false;
        }
    }
    return true;
};

// Solution 2
var isArraySpecial = (nums: number[]): boolean =>
    nums.reduce((accumulator, currentElement, currentIndex) => {
        const parity_1 = currentElement % 2;
        const parity_2 = nums[currentIndex - 1] % 2;
        if (parity_1 === parity_2) {
            nums.length = 0; // eject early by mutating the iterated array
            return false;
        }
        return accumulator;
    }, true);

// Solution 3
var isArraySpecial = (nums: number[]): boolean => nums.every((num, i) => i === 0 || num % 2 !== nums[i - 1] % 2);
