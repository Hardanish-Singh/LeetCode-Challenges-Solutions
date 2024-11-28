// Leetcode: https://leetcode.com/problems/move-zeroes/

// Solution 1
var moveZeroes = (nums) => {
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
var moveZeroes = (nums) =>
    nums.reduceRight((accumulator, currentValue, currentIndex, array) => {
        if (nums[currentIndex] === 0) {
            nums.splice(currentIndex, 1);
            nums.push(0);
        }
    });

// Solution 3
var moveZeroes = (nums) =>
    nums.reduceRight((...args) => {
        const currentIndex = args[2];
        if (nums[currentIndex] === 0) {
            nums.splice(currentIndex, 1);
            nums.push(0);
        }
    });
