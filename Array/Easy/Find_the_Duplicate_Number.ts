// Leetcode: https://leetcode.com/problems/find-the-duplicate-number/

// Solution 1
var findDuplicate = (nums: number[]): number => {
    const map = new Map<number, number>();
    for (const num of nums) {
        if (map.has(num)) {
            return num;
        }
        map.set(num, 1);
    }
    return -1;
};

// Solution 2
var findDuplicate = (nums: number[]): number => {
    nums.sort((a, b) => a - b);
    return nums.reduce((accumulator: any, num: number, _, nums: number[]) => {
        if (accumulator.has(num)) {
            nums.splice(1); // eject early by mutating iterated copy
            return num;
        }
        accumulator.set(num, 1);
        return accumulator;
    }, new Map<number, number>());
};

// Solution 3
var findDuplicate = (nums: number[]): number => {
    nums.sort((a, b) => a - b);
    let duplicatedNumber: number = -1;
    nums.reduce((accumulator: Map<number, number>, num: number, _, nums: number[]) => {
        if (accumulator.has(num)) {
            duplicatedNumber = num;
            nums.length = 0;
        }
        accumulator.set(num, 1);
        return accumulator;
    }, new Map<number, number>());
    return duplicatedNumber;
};
