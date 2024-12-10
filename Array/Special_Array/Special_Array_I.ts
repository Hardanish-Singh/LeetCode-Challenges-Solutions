// Leetcode: https://leetcode.com/problems/special-array-i/

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

var isArraySpecial = (nums: number[]): boolean =>
    nums.reduce((acc, currentElement, currentIndex) => {
        const parity_1 = currentElement % 2;
        const parity_2 = nums[currentIndex - 1] % 2;
        if (parity_1 === parity_2) {
            nums.length = 0;
            return false;
        }
        return acc;
    }, true);

var isArraySpecial = (nums: number[]): boolean => nums.every((num, i) => i === 0 || num % 2 !== nums[i - 1] % 2);
