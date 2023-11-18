// Leetcode: https://leetcode.com/problems/merge-strings-alternately/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

const mergeAlternately = (word1, word2) => {
    let result = "";
    for (let i = 0; i < word1.length; i++) {
        result += word1[i] + (word2[i] ? word2[i] : "");
    }
    let maxLength = word2.length - word1.length;
    if (maxLength > 0) {
        result += word2.slice(word1.length);
    }
    return result;
};
