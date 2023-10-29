// Leetcode: https://leetcode.com/problems/add-strings/

const addStrings = (num1: string, num2: string): string => (BigInt(num1) + BigInt(num2)).toString();
