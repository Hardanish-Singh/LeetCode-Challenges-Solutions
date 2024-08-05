// Leetcode: https://leetcode.com/problems/shortest-word-distance/

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// Solution 1
var shortestDistance = (wordsDict, word1, word2) => {
    let index1 = -1;
    let index2 = -1;
    return wordsDict.reduce((accumulator, currentValue, currentIndex, wordsDict) => {
        if (currentValue === word1) {
            index1 = currentIndex;
        }
        if (currentValue === word2) {
            index2 = currentIndex;
        }
        if (index1 !== -1 && index2 !== -1) {
            accumulator = Math.min(accumulator, Math.abs(index2 - index1));
        }
        return accumulator;
    }, Number.POSITIVE_INFINITY);
};

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// Solution 2
var shortestDistance = (wordsDict, word1, word2, index1 = -1, index2 = -1) =>
    wordsDict.reduce((accumulator, currentValue, currentIndex, wordsDict) => {
        if (currentValue === word1) {
            index1 = currentIndex;
        }
        if (currentValue === word2) {
            index2 = currentIndex;
        }
        if (index1 !== -1 && index2 !== -1) {
            accumulator = Math.min(accumulator, Math.abs(index2 - index1));
        }
        return accumulator;
    }, Number.POSITIVE_INFINITY);
