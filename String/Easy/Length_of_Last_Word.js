// Leetcode: https://leetcode.com/problems/length-of-last-word/

/**
 * @param { string } s
 * @return { number }
 */

// SOLUTION 1
var lengthOfLastWord = function (s) {
        s = s.trim().split(" ");
        return s[s.length - 1].length;
};

/**
 * @param { string } s
 * @return { number }
 */

// SOLUTION 2
var lengthOfLastWord = function (s) {
        s = s.trim();
        let lastIndexOfSpace = s.lastIndexOf(" ");
        return s.slice(lastIndexOfSpace + 1).length;
};
