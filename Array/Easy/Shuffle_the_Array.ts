// Leetcode: https://leetcode.com/problems/shuffle-the-array/

// Solution 1
var shuffle = (nums: number[], n: number): number[] => {
    const arr: number[] = [];
    for (let i = 0; i < n; i++) arr.push(nums[i], nums[n + i]);
    return arr;
};

// Solution 2
var shuffle = (nums: number[], n: number): number[] =>
    nums.slice(0, n).reduce((accumulator: number[], num, index) => [...accumulator, num, nums[index + n]], []);
