// Leetcode: https://leetcode.com/problems/number-of-arithmetic-triplets/

const arithmeticTriplets = (nums: number[], diff: number): number =>
    nums.reduce(
        (accumulator: number, num: number) =>
            accumulator + (nums.includes(num + diff) && nums.includes(num + 2 * diff) ? 1 : 0),
        0
    );
