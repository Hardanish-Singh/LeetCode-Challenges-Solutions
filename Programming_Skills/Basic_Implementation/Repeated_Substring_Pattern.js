// Leetcode: https://leetcode.com/problems/repeated-substring-pattern/

/**
 * @param {string} s
 * @return {boolean}
 */

const repeatedSubstringPattern = (s) => {
    for (let i = 0; i < s.length - 1; i++) {
        let subString = s.slice(0, i + 1);
        if (s.split(subString).join("").length === 0) {
            return true;
        }
    }
    return false;
};
