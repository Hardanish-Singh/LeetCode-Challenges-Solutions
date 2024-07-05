// Leetcode: https://leetcode.com/problems/neighboring-bitwise-xor/

// Solution 1
var doesValidArrayExist = (derived: number[]): boolean => {
    let n = derived.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans ^ derived[i];
    }
    return ans == 0;
};

// Solution 2
var doesValidArrayExist = (derived: number[]): boolean => {
    return derived.reduce((accumulator: any, _, index: number, nums: number[]) => {
        accumulator = accumulator ^ derived[index];
        if (index === nums.length - 1) {
            return accumulator == 0;
        }
        return accumulator;
    }, 0);
};
