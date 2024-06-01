// Leetcode: https://leetcode.com/problems/single-number-ii/

// Solution 1 (using XOR operator)
const singleNumber = (nums: number[]): number => {
    let ones: number = 0;
    let twos: number = 0;
    for (let i = 0; i < nums.length; i++) {
        ones = (ones ^ nums[i]) & ~twos;
        twos = (twos ^ nums[i]) & ~ones;
    }
    return ones;
};
