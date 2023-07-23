// Leetcode: https://leetcode.com/problems/split-strings-by-separator/

const splitWordsBySeparator = (words: string[], separator: string): string[] =>
    words.join(separator).split(separator).filter(Boolean);
