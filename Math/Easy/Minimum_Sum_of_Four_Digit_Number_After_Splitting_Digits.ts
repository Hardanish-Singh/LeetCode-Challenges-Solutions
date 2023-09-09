// Leetcode: https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

const minimumSum = (num: number): number => {
    const nums: Array<number> = String(num).split("").map(Number).sort((a, b) => a - b);
    let num1: number = Number(`${nums[0]}${nums[2]}`);
    let num2: number = Number(`${nums[1]}${nums[3]}`);
    return num1 + num2;
};
