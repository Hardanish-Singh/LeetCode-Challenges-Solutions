// Leetcode: https://leetcode.com/problems/partition-array-according-to-given-pivot/

// Solution 1
var pivotArray = function (nums: number[], pivot: number): number[] {
    let left = nums.filter((i) => i < pivot);
    let mid = nums.filter((i) => i === pivot);
    let right = nums.filter((i) => i > pivot);
    return [...left, ...mid, ...right];
};

// Solution 2
var pivotArray = (nums: number[], pivot: number): number[] => [
    ...nums.filter((i) => i < pivot),
    ...nums.filter((i) => i === pivot),
    ...nums.filter((i) => i > pivot),
];
