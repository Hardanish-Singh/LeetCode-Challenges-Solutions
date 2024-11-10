// Leetcode: https://leetcode.com/problems/array-partition/

const arrayPairSum = (nums: number[]): number =>
    nums
        .sort((a, b) => a - b)
        .filter((_, index) => index % 2 === 0) // Select only even indices
        .reduce((accumulator: number, currentItem: number) => accumulator + currentItem, 0);
