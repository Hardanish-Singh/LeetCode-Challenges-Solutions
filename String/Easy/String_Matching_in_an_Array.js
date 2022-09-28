// Leetcode: https://leetcode.com/problems/string-matching-in-an-array/

/**
 * @param { string[] } words
 * @return { string[] }
 */

var stringMatching = function (words) {
        let rs = [];
        for (let i = 0; i < words.length; i++) {
                for (let j = i + 1; j < words.length; j++) {
                        if (words[i].indexOf(words[j]) !== -1) {
                                rs.push(words[j]);
                        } else if (words[j].indexOf(words[i]) !== -1) {
                                rs.push(words[i]);
                        }
                }
        }
        return Array.from(new Set(rs));
};
