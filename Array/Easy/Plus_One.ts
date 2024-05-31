// Leetcode: https://leetcode.com/problems/plus-one/

const plusOne = (digits: number[]): number[] =>
    String(BigInt(digits.join("")) + 1n)
        .split("")
        .map(Number);
