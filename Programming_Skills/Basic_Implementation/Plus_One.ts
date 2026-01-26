// Leetcode: https://leetcode.com/problems/plus-one/

// prettier-ignore
const plusOne = (digits: number[]): number[] => String(BigInt(digits.join("")) + 1n).split("").map(Number);
