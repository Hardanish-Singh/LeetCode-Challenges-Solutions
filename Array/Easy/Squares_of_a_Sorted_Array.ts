// Leetcode: https://leetcode.com/problems/squares-of-a-sorted-array

const sortedSquares = (nums: number[]): number[] =>
    nums
        .reduce((accumulator: number[], currentValue) => {
            accumulator.push(Math.pow(currentValue, 2));
            return accumulator;
        }, [])
        .sort((a, b) => a - b);
