// Leetcode: https://leetcode.com/problems/largest-number/

const largestNumber = (nums: number[]): string =>
    nums.every((num) => num === 0)
        ? "0"
        : nums
              .map(String)
              .sort((a, b) => (Number(a + b) > Number(b + a) ? -1 : 1))
              .join("");
