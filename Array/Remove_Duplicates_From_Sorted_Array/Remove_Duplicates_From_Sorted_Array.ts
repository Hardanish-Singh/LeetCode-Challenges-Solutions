// Leetcode: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Solution 1
var removeDuplicates = (nums: number[]): number => {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

// Solution 2
var removeDuplicates = (nums: number[]): number => {
    const set = new Set(nums);
    nums.length = 0;
    nums.push(...set);
    return nums.length;
};
