// Leetcode: https://leetcode.com/problems/add-binary/

/**
 * @param { string } a
 * @param { string } b
 * @return { string }
 */

var addBinary = (a, b) => (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
