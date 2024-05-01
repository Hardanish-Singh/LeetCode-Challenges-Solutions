// Leetcode: https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/

const countElements = (nums: number[]): number => {
    const min: number = Math.min.apply(null, nums);
    const max: number = Math.max.apply(null, nums);
    return nums.reduce((accumulator, curr) => {
        if (curr > min && curr < max) {
            accumulator++;
        }
        return accumulator;
    }, 0);
};
