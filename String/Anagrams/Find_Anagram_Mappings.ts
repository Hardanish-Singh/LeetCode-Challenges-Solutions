// Leetcode: https://leetcode.com/problems/find-anagram-mappings/

const anagramMappings = (nums1: number[], nums2: number[]): number[] => nums1.map((num1) => nums2.indexOf(num1));
