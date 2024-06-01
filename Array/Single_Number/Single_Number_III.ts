// Leetcode: https://leetcode.com/problems/single-number-iii/

// Solution 1 (using XOR operator)
var singleNumber = (nums: number[]): number[] => {
    let xor = nums.reduce((acc, cur) => acc ^ cur, 0);
    let uniqBitPos = xor.toString(2).length - 1;
    let xor2 = nums.filter((num) => ((num >> uniqBitPos) & 1) == 0).reduce((acc, cur) => acc ^ cur, 0);
    return [xor2, xor2 ^ xor];
};

// Solution 2(using MAP)
var singleNumber = (nums: number[]): number[] => {
    const map: Map<number, number> = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const result: number[] = [];
    for (let [key, value] of map) {
        if (value === 1) {
            result.push(key);
        }
    }
    return result;
};
