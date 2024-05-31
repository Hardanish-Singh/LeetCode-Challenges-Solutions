// Leetcode: https://leetcode.com/problems/next-greater-element-i/

const nextGreaterElement = (nums1, nums2) =>
    nums1.reduce((accumulator, curr, index) => {
        const nums2Index = nums2.findIndex((x) => x === curr);
        const result = nums2.find((x, index) => x > curr && index > nums2Index) || -1;
        accumulator.push(result);
        return accumulator;
    }, new Array());
