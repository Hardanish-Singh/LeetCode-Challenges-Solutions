// Leetcode: https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = (s) => s.split(" ").filter(a => a.length > 0).at(-1).length;