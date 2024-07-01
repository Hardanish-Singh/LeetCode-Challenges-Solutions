// Leetcode: https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/

// Solution 1
var maxArrayValue = (nums: number[]): number => {
    for (let i: number = nums.length - 2; i >= 0; i--) {
        if (nums[i + 1] >= nums[i]) {
            nums[i] += nums[i + 1];
        }
    }
    return nums[0];
};

// Solution 2
var maxArrayValue = (nums: number[]): number =>
    nums.reduceRight((accumulator, currentValue: number, currentIndex: number, nums: number[]) => {
        if (nums[currentIndex + 1] >= nums[currentIndex]) {
            nums[currentIndex] += nums[currentIndex + 1];
        }
        accumulator = nums[currentIndex];
        return accumulator;
    }, nums[nums.length - 1]);
