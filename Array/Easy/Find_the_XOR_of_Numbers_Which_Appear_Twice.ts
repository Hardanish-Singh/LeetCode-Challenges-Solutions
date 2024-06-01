// Leetcode: https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/

// Solution 1
var duplicateNumbersXOR = (nums: number[]): number => {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let result = 0;
    for (const [key, value] of map.entries()) {
        if (value === 2) {
            result ^= key;
        }
    }
    return result;
};

// Solution 2
var duplicateNumbersXOR = (nums: number[]): number => {
    const map = new Map<number, number>();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return Array.from(map.entries()).reduce((accumulator, [key, value]) => {
        if (accumulator === 2) {
            accumulator ^= key;
        }
        return accumulator;
    }, 0);
};
