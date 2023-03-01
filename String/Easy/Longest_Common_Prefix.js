// Leetcode: https://leetcode.com/problems/longest-common-prefix/

/**
 * @param { string[] } strs
 * @return { string }
 */

// SOLUTION 1
var longestCommonPrefix = function (strs) {
        strs = strs.sort((a, b) => a.length - b.length);
        let word = strs[0];

        while (word.length !== 0) {
                let isLongestPrefix = true;
                for (let i = 1; i < strs.length; i++) {
                        if (strs[i].indexOf(word) !== 0) {
                                isLongestPrefix = false;
                                break;
                        }
                }
                if (isLongestPrefix) {
                        return word;
                }
                word = strs[0].slice(0, word.length - 1);
        }

        return "";
};

// SOLUTION 2

/**
 * @param { string[] } strs
 * @return { string }
 */

var longestCommonPrefix = function (strs) {
        strs.sort((a, b) => a.length - b.length);
        if (strs.length === 1) {
                return strs[0];
        }
        if (strs[0] === "") {
                return "";
        }

        let flag = true;
        let index = 0;
        let word = strs[0][index];

        while (flag) {
                for (let i = 1; i < strs.length; i++) {
                        if (strs[i].indexOf(word) !== 0) {
                                word = word.slice(0, word.length - 1);
                                flag = false;
                                break;
                        }
                }
                if (flag) {
                        let character = strs[0][++index];
                        if (character == null) {
                                break;
                        } else {
                                word += character;
                        }
                }
        }

        return word;
};
