// Leetcode: https://leetcode.com/problems/keep-multiplying-found-values-by-two/

const findFinalValue = (nums: number[], original: number): number => {
    while (nums.includes(original)) {
        original *= 2;
    }
    return original;
};
