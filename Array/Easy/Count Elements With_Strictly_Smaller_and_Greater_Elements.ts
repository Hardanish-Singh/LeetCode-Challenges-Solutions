// Leetcode: https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/

const countElements = (nums: number[]): number =>
    nums.reduce((accumulator, currentElement) => {
        if (currentElement > Math.min.apply(null, nums) && currentElement < Math.max.apply(null, nums)) {
            accumulator++;
        }
        return accumulator;
    }, 0);
