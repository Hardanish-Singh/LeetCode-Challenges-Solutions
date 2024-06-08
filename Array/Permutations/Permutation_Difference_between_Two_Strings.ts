// Leetcode: https://leetcode.com/problems/permutation-difference-between-two-strings/

const findPermutationDifference = (s: string, t: string): number =>
    s.split("").reduce((accumulator, character, index) => {
        accumulator += Math.abs(index - t.indexOf(character));
        return accumulator;
    }, 0);
