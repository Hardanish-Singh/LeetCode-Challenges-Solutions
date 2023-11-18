// Leetcode: https://leetcode.com/problems/find-the-difference/
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

const findTheDifference = (s, t) => {
    for (let char of s) {
        t = t.replace(char, "");
    }
    return t;
};
