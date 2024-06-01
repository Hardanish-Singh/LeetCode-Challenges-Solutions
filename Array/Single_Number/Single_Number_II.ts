// Leetcode: https://leetcode.com/problems/single-number-ii/

// Solution 1 (using XOR operator)
var singleNumber = (nums: number[]): number => {
    let ones: number = 0;
    let twos: number = 0;
    for (let i = 0; i < nums.length; i++) {
        ones = (ones ^ nums[i]) & ~twos;
        twos = (twos ^ nums[i]) & ~ones;
    }
    return ones;
};

// Solution 2(using MAP)
var singleNumber = (nums: number[]): number => {
    const map: Map<number, number> = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (let [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }
    return -1;
};
