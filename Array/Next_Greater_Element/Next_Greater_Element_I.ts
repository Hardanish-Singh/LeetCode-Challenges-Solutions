// Leetcode: https://leetcode.com/problems/next-greater-element-i/

const nextGreaterElement = (nums1: number[], nums2: number[]): number[] =>
    nums1.reduce((accumulator: number[], num1: number) => {
        const nums2Index = nums2.findIndex((x) => x === num1);
        const result = nums2.find((x, index) => x > num1 && index > nums2Index) || -1;
        accumulator.push(result);
        return accumulator;
    }, []);
