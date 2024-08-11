// Leetcode: https://leetcode.com/problems/shortest-word-distance/

// Solution 1
var shortestDistance = (wordsDict: string[], word1: string, word2: string): number => {
    let index1: number = -1;
    let index2: number = -1;
    return wordsDict.reduce((accumulator, currentValue, currentIndex) => {
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

// Solution 2
// @ts-ignore
var shortestDistance = (wordsDict: string[], word1: string, word2: string, index1: number = -1, index2: number = -1) =>
    wordsDict.reduce((accumulator, currentValue, currentIndex) => {
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
