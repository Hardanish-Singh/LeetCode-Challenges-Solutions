// Leetcode: https://leetcode.com/problems/array-partition/

const arrayPairSum = (nums: number[]): number => {
    nums.sort((a, b) => a - b);
    return nums.reduce(
        (accumulator: number, num: number, index: number) => (index % 2 === 0 ? accumulator + num : accumulator),
        0
    );
};
