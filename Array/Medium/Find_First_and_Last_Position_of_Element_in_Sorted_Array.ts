// Leetcode: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

const searchRange = (nums: number[], target: number): number[] => [nums.indexOf(target), nums.lastIndexOf(target)];
