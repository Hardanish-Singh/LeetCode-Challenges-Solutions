// Leetcode: https://leetcode.com/problems/plus-one/

var plusOne = (digits: Array<number>): Array<number> => String(BigInt(digits.join("")) + 1n).split("").map(Number);
