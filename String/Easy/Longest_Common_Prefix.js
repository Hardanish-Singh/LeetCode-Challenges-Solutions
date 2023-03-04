// Leetcode: https://leetcode.com/problems/longest-common-prefix/

/**
 * @param { string[] } strs
 * @return { string }
 */

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
                word = word.slice(0, word.length - 1);
        }

        return "";
};
