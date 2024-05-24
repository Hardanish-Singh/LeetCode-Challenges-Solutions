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
