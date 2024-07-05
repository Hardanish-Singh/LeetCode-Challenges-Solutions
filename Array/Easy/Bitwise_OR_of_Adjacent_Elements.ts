// Leetcode: https://leetcode.com/problems/bitwise-or-of-adjacent-elements/

const orArray = (nums: number[]): number[] =>
    nums.reduce((accumulator: number[], _, index: number, nums: number[]) => {
        if (index === nums.length - 1) {
            return accumulator;
        }
        accumulator[index] = nums[index] | nums[index + 1];
        return accumulator;
    }, []);
