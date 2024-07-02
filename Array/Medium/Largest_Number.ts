// Leetcode: https://leetcode.com/problems/largest-number/

const largestNumber = (nums: number[]): string =>
    nums.every((num) => num === 0)
        ? "0"
        : nums
              .map(String)
              .sort((a, b) => {
                  const num1 = Number(a + b);
                  const num2 = Number(b + a);
                  return num1 > num2 ? -1 : 1;
              })
              .join("");
