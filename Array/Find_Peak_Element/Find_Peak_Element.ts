// Leetcode: https://leetcode.com/problems/find-peak-element/
const findPeakElement = (nums: number[]): number => nums.indexOf(Math.max.apply(null, nums));
