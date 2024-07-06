// Leetcode: https://leetcode.com/problems/partition-array-according-to-given-pivot/

var pivotArray = function (nums: number[], pivot: number): number[] {
    let left = nums.filter((i) => i < pivot);
    let mid = nums.filter((i) => i === pivot);
    let right = nums.filter((i) => i > pivot);
    return [...left, ...mid, ...right];
};
