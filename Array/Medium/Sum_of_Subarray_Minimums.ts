// Leetcode: https://leetcode.com/problems/sum-of-subarray-minimums/

const MOD = 10 ** 9 + 7; // 10^9 + 7

const sumSubarrayMins = (nums: number[]): number => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let min = nums[i];
        sum += min;
        for (let j = i + 1; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
            sum += min;
        }
    }
    return sum % MOD;
};
