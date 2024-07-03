// Leetcode: https://leetcode.com/problems/maximum-subarray/

// Solution 1 (OPTIMIZED BRUTE FORCE APPROACH, TLE)
var maxSubArray = (nums: number[]): number => {
    let maxSubArraySum = Number.NEGATIVE_INFINITY; // or -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let cumulativeSum = 0;
        for (let j = i; j < nums.length; j++) {
            cumulativeSum += nums[j];
            maxSubArraySum = Math.max(maxSubArraySum, cumulativeSum);
        }
    }
    return maxSubArraySum;
};

// Solution 2 (KADANE'S ALGORITHM)
var maxSubArray = (nums: number[]): number => {
    let maxSubArraySum = Number.NEGATIVE_INFINITY; // or -Infinity;
    let localSum = 0;
    for (const num of nums) {
        localSum = Math.max(num, localSum + num);
        maxSubArraySum = Math.max(maxSubArraySum, localSum);
    }
    return maxSubArraySum;
};

// Solution 3 (KADANE'S ALGORITHM)
var maxSubArray = (nums: number[]): number => {
    let localSum = 0;
    return nums.reduce((globalSum, num) => {
        localSum = Math.max(num, localSum + num);
        globalSum = Math.max(globalSum, localSum);
        return globalSum;
    }, Number.NEGATIVE_INFINITY);
};

// Solution 4 (KADANE'S ALGORITHM)
var maxSubArray = (nums: number[]): number => {
    let maxSubArraySum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        maxSubArraySum = Math.max(maxSubArraySum, nums[i]);
    }
    return maxSubArraySum;
};

// Solution 5 (KADANE'S ALGORITHM)
var maxSubArray = (nums: number[]): number =>
    nums.reduce((globalSum, _, i) => {
        nums[i] = Math.max(nums[i], nums[i] + (nums[i - 1] || 0));
        globalSum = Math.max(globalSum, nums[i]);
        return globalSum;
    }, Number.NEGATIVE_INFINITY);
