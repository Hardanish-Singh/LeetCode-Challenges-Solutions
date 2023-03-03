// Leetcode: https://leetcode.com/problems/most-common-word/

/**
 * @param { string } paragraph
 * @param { string[] } banned
 * @return { string }
 */

var mostCommonWord = function (paragraph, banned) {
        let words = paragraph.replace(/[^a-zA-Z]/g, " ").split(" ");
        let hashmap = {};
        for (let i = 0; i < words.length; i++) {
                let word = words[i].toLowerCase();
                if (banned.includes(word) || word.length === 0) {
                        continue;
                }
                word in hashmap ? (hashmap[word] += 1) : (hashmap[word] = 1);
        }
        const sortedObjectByValue = Object.fromEntries(Object.entries(hashmap).sort(([, a], [, b]) => b - a));
        return Object.keys(sortedObjectByValue)[0];
};
