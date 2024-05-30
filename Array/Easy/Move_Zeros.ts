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
