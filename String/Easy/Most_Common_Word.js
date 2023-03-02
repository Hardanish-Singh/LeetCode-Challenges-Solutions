// Leetcode: https://leetcode.com/problems/most-common-word/

/**
 * @param { string } paragraph
 * @param { string[] } banned
 * @return { string }
 */

var mostCommonWord = function (paragraph, banned) {
        paragraph = paragraph.replace(/\.|\,|\;|\?|\!|'/g, " ").trim();
        let words = paragraph.split(/\s+/g);
        let hashmap = {};
        for (let i = 0; i < words.length; i++) {
                let word = words[i].toLowerCase();
                if (banned.includes(word)) {
                        continue;
                }
                if (word in hashmap) {
                        hashmap[word] += 1;
                } else {
                        hashmap[word] = 1;
                }
        }
        const sortable = Object.fromEntries(Object.entries(hashmap).sort(([, a], [, b]) => b - a));
        return Object.keys(sortable)[0];
};
