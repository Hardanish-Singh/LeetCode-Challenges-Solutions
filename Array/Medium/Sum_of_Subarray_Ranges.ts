// Leetcode: https://leetcode.com/problems/sum-of-subarray-ranges/

const subArrayRanges = (nums: number[]): number => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let min = nums[i];
        let max = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
            max = Math.max(max, nums[j]);
            sum += max - min;
        }
    }
    return sum;
};
