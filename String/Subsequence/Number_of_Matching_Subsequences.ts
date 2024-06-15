// Leetcode: https://leetcode.com/problems/number-of-matching-subsequences/

const isSubsequence = (source: string, target: string): boolean => {
    let index = -1;
    for (const s of source) {
        index = target.indexOf(s, index + 1);
        if (index == -1) {
            return false;
        }
    }
    return true;
};

const numMatchingSubseq = (s: string, words: string[]): number => {
    let count = 0;
    const set = new Set();
    for (const word of words) {
        if (set.has(word)) {
            count++;
        } else if (isSubsequence(word, s)) {
            set.add(word);
            count++;
        }
    }
    return count;
};
