// Leetcode: https://leetcode.com/problems/move-zeroes/

// Solution 1
var moveZeroes = (nums: number[]): number[] => {
    let zeros = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            zeros++;
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

// Solution 2
var moveZeroes = (nums: number[]): number[] =>
    /* @ts-ignore */
    nums.reduceRight((total, currentValue, index, array) => {
        if (nums[index] === 0) {
            nums.splice(index, 1);
            nums.push(0);
        }
    });

// Solution 3
var moveZeroes = (nums: number[]): number[] =>
    /* @ts-ignore */
    nums.reduceRight((...args) => {
        const index = args[2];
        if (nums[index] === 0) {
            nums.splice(index, 1);
            nums.push(0);
        }
    });
