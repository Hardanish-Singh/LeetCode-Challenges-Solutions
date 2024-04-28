// Leetcode: https://leetcode.com/problems/running-sum-of-1d-array/

const runningSum = (nums: number[]): number[] =>
    nums.reduce((accumulator: number[], num: number, index: number) => {
        num += index > 0 ? accumulator[index - 1] : 0;
        accumulator.push(num);
        return accumulator;
    }, []);
