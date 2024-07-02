// Leetcode: https://leetcode.com/problems/largest-number/

const largestNumber = (nums: number[]): string =>
    nums.every((num) => num === 0)
        ? "0"
        : nums
              .sort((a, b) => {
                  const num1 = parseInt(String(a) + String(b));
                  const num2 = parseInt(String(b) + String(a));
                  return num1 > num2 ? -1 : 1;
              })
              .join("");
