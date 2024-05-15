// Leetcode: https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/

const countElements = (nums: number[]): number =>
    nums.reduce((accumulator, curr) => {
        if (curr > Math.min.apply(null, nums) && curr < Math.max.apply(null, nums)) {
            accumulator++;
        }
        return accumulator;
    }, 0);
