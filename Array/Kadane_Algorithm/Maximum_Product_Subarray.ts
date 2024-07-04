// Leetcode: https://leetcode.com/problems/maximum-product-subarray/

// SOLUTION 1: (OPTIMIZED BRUTE FORCE APPROACH)
var maxProduct = (nums: number[]): number => {
    let maxSubArrayProduct = Number.NEGATIVE_INFINITY; // or -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let cumulativeSum = 1;
        for (let j = i; j < nums.length; j++) {
            cumulativeSum *= nums[j];
            maxSubArrayProduct = Math.max(maxSubArrayProduct, cumulativeSum);
        }
    }
    return maxSubArrayProduct;
};

// SOLUTION 2 (KADANE'S ALGORITHM)
// Two Traversals: Idea is to find the maximum product from both sides,i.e, once in a forwarding direction and another in the backward direction.
var maxProduct = (nums: number[]): number => {
    let maxProductLeft = 0;
    let maxProductRight = 0;
    let maxSubArrayProduct = Number.NEGATIVE_INFINITY; // or -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (maxProductLeft === 0) {
            maxProductLeft = 1;
        }
        maxProductLeft *= nums[i];
        maxSubArrayProduct = Math.max(maxSubArrayProduct, maxProductLeft);

        if (maxProductRight === 0) {
            maxProductRight = 1;
        }
        maxProductRight *= nums[nums.length - i - 1];
        maxSubArrayProduct = Math.max(maxSubArrayProduct, maxProductRight);
    }
    return maxSubArrayProduct;
};

// SOLUTION 3 (KADANE'S ALGORITHM)
// Two Traversals: Idea is to find the maximum product from both sides,i.e, once in a forwarding direction and another in the backward direction.
var maxProduct = (nums: number[]): number => {
    let maxProductLeft = 0;
    let maxProductRight = 0;
    return nums.reduce((accumulator: number, num: number, index: number, nums: number[]) => {
        if (maxProductLeft === 0) {
            maxProductLeft = 1;
        }
        maxProductLeft *= num;
        accumulator = Math.max(accumulator, maxProductLeft);

        if (maxProductRight === 0) {
            maxProductRight = 1;
        }
        maxProductRight *= nums[nums.length - index - 1];
        accumulator = Math.max(accumulator, maxProductRight);

        return accumulator;
    }, Number.NEGATIVE_INFINITY);
};

// SOLUTION 4
var maxProduct = (nums: number[]): number => {
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp_max = Math.max(nums[i], Math.max(nums[i] * max, nums[i] * min));
        let temp_min = Math.min(nums[i], Math.min(nums[i] * max, nums[i] * min));
        max = temp_max;
        min = temp_min;
        result = Math.max(max, min, result);
    }
    return result;
};
