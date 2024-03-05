// Leetcode: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

// Solution 1
var removeDuplicates = (nums: number[]): number => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === nums[i + 2]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};
