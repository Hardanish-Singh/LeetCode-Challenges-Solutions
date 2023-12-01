// Leetcode: https://leetcode.com/problems/multiply-strings/

/**
 * @param { string } num1
 * @param { string } num2
 * @return { string }
 */

var multiply = (num1, num2) => (BigInt(num1) * BigInt(num2)).toString();
