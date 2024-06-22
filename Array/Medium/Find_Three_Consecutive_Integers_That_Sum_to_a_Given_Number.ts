// Leetcode: https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/

const sumOfThree = (num: number): number[] => {
    let n = Math.floor(num / 3);
    return n - 1 + n + n + 1 === num ? [n - 1, n, n + 1] : [];
};
