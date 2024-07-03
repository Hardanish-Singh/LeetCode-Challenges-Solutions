// Leetcode: https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/

// Solution 1 (KADANE'S ALGORITHM)
// Here the idea is to run Kadane Algorithm twice, Once calculating the max sum & Once calculating the min sum
var maxAbsoluteSum = (nums: number[]): number => {
    let clonedArray = [...nums];

    let max = Number.NEGATIVE_INFINITY; // or -Infinity;
    for (let i = 0; i < clonedArray.length; i++) {
        clonedArray[i] = Math.max(clonedArray[i], clonedArray[i] + (clonedArray[i - 1] || 0));
        max = Math.max(max, clonedArray[i]);
    }

    clonedArray = [...nums];

    let min = Number.POSITIVE_INFINITY; // or Infinity;
    for (let i = 0; i < clonedArray.length; i++) {
        clonedArray[i] = Math.min(clonedArray[i], clonedArray[i] + (clonedArray[i - 1] || 0));
        min = Math.min(min, clonedArray[i]);
    }

    return Math.max(max, Math.abs(min));
};

// Solution 2 (KADANE'S ALGORITHM)
// Here the idea is to run Kadane Algorithm twice, Once calculating the max sum & Once calculating the min sum
var maxAbsoluteSum = (nums: number[]): number => {
    let max = Number.NEGATIVE_INFINITY; // or -Infinity;
    let min = Number.POSITIVE_INFINITY; // or Infinity;
    let currentMax = 0;
    let currentMin = 0;

    for (let i = 0; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        currentMin = Math.min(nums[i], currentMin + nums[i]);
        max = Math.max(max, currentMax);
        min = Math.min(min, currentMin);
    }

    return Math.max(max, Math.abs(min));
};
