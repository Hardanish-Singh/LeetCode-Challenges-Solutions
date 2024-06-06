// Leetcode: https://leetcode.com/problems/lexicographical-numbers/

var lexicalOrder = (numbers: number): number[] =>
    Array.from({ length: numbers }, (_, i) => String(i + 1))
        .sort((a, b) => a.localeCompare(b))
        .map(Number) as number[];
