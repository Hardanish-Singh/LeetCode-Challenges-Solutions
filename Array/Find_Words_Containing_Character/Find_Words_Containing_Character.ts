// Leetcode: https://leetcode.com/problems/find-words-containing-character/
// Solution 1
var findWordsContaining = (words: string[], x: string): number[] =>
    words.flatMap((word: string, index: number) => (word.includes(x) ? index : []));

// Solution 2
var findWordsContaining = (words: string[], x: string): number[] =>
    words.reduce(
        (accumulator: number[], word: string, index: number) =>
            word.includes(x) ? [...accumulator, index] : accumulator,
        []
    );
