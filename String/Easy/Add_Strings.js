// Leetcode: https://leetcode.com/problems/add-strings/

/**
 * @param { string } num1
 * @param { string } num2
 * @return { string }
 */

var addStrings = (num1, num2) => (BigInt(num1) + BigInt(num2)).toString();
