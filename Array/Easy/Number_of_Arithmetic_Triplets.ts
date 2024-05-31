// Leetcode: https://leetcode.com/problems/number-of-arithmetic-triplets/

const arithmeticTriplets = (nums: number[], diff: number): number =>
    nums.reduce(
        (acc: number, curr: number) => acc + (nums.includes(curr + diff) && nums.includes(curr + diff + diff) ? 1 : 0),
        0
    );
