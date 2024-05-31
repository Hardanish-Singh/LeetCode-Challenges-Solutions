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
            nums.length = 0; // eject early by mutating iterated copy and emptying the array
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
            nums.length = 0; // eject early by mutating iterated copy and emptying the array
            duplicatedNumber = num;
        }
        accumulator.set(num, 1);
        return accumulator;
    }, new Map<number, number>());
    return duplicatedNumber;
};

// Solution 4
var findDuplicate = (nums: number[]): number => {
    const map = new Map<number, number>();
    return (
        nums
            .sort((a, b) => a - b)
            .reduceRight((accumulator, currentValue, currentIndex, array) => {
                if (map.has(currentValue)) {
                    accumulator = currentValue;
                }
                map.set(currentValue, 1);
                return accumulator;
            }) ?? -1
    );
};
