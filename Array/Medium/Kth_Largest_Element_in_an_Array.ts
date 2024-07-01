// Leetcode: https://leetcode.com/problems/kth-largest-element-in-an-array/

const findKthLargest = (nums: number[], k: number): number => nums.sort((a, b) => a - b)[nums.length - k];
