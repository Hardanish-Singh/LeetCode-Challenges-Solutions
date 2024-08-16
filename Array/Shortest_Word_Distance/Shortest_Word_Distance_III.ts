// Leetcode: https://leetcode.com/problems/shortest-word-distance-iii/

var shortestWordDistance = (wordsDict: string[], word1: string, word2: string): number => {
    let index1: number = -1;
    let index2: number = -1;
    return wordsDict.reduce((accumulator, currentValue, currentIndex) => {
        if (currentValue === word1 && index2 != -1) {
            accumulator = Math.min(accumulator, Math.abs(currentIndex - index2));
        }
        if (currentValue === word2 && index1 != -1) {
            accumulator = Math.min(accumulator, Math.abs(currentIndex - index1));
        }
        if (currentValue === word1) index1 = currentIndex;
        if (currentValue === word2) index2 = currentIndex;
        return accumulator;
    }, Number.POSITIVE_INFINITY);
};
