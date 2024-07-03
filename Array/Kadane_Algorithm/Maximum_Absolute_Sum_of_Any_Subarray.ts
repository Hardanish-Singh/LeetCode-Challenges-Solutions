// Leetcode: https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/

// Solution 1 (KADANE'S ALGORITHM)
// Here the idea is to run Kadane Algorithm twice, Once calculating the max sum & Once calculating the min sum
const maxAbsoluteSum = (nums: number[]): number => {
    let clonedArray = [...nums];

    let max = Number.MIN_VALUE;
    for (let i = 0; i < clonedArray.length; i++) {
        clonedArray[i] = Math.max(clonedArray[i], clonedArray[i] + (clonedArray[i - 1] || 0));
        max = Math.max(max, clonedArray[i]);
    }

    clonedArray = [...nums];

    let min = Number.MAX_VALUE;
    for (let i = 0; i < clonedArray.length; i++) {
        clonedArray[i] = Math.min(clonedArray[i], clonedArray[i] + (clonedArray[i - 1] || 0));
        min = Math.min(min, clonedArray[i]);
    }

    return Math.max(max, Math.abs(min));
};
