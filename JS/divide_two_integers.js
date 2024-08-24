// Leetcode:https://leetcode.com/problems/divide-two-integers/

var divide = (dividend, divisor) =>
    parseInt(dividend / divisor) > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : parseInt(dividend / divisor);
