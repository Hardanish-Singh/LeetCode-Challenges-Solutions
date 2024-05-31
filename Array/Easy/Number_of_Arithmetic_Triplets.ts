// Leetcode: https://leetcode.com/problems/number-of-arithmetic-triplets/

const arithmeticTriplets = (nums: number[], diff: number): number =>
    nums.reduce(
        (accumulator: number, curr: number) =>
            accumulator + (nums.includes(curr + diff) && nums.includes(curr + diff + diff) ? 1 : 0),
        0
    );
