// Leetcode: https://leetcode.com/problems/find-the-duplicate-number/

// Solution 1
var findDuplicate = (nums: number[]): number => {
    const map = new Map<number, boolean>();
    for (const num of nums) {
        if (map.has(num)) {
            return num;
        }
        map.set(num, true);
    }
    return -1;
};

// Solution 2
var findDuplicate = (nums: number[]): number => {
    nums.sort((a, b) => a - b);
    return nums.reduce((accumulator: any, currentElement: number, _, nums: number[]) => {
        if (accumulator.has(currentElement)) {
            nums.length = 0; // eject early by mutating iterated copy and emptying the array
            return currentElement;
        }
        accumulator.set(currentElement, true);
        return accumulator;
    }, new Map<number, boolean>());
};

// Solution 3
var findDuplicate = (nums: number[]): number => {
    nums.sort((a, b) => a - b);
    let duplicatedNumber: number = -1;
    nums.reduce((accumulator: Map<number, boolean>, currentElement: number, _, nums: number[]) => {
        if (accumulator.has(currentElement)) {
            nums.length = 0; // eject early by mutating iterated copy and emptying the array
            duplicatedNumber = currentElement;
        }
        accumulator.set(currentElement, true);
        return accumulator;
    }, new Map<number, boolean>());
    return duplicatedNumber;
};

// Solution 4
var findDuplicate = (nums: number[]): number => {
    const map = new Map<number, boolean>();
    return (
        nums
            .sort((a, b) => a - b)
            .reduceRight((accumulator, currentElement) => {
                if (map.has(currentElement)) {
                    accumulator = currentElement;
                }
                map.set(currentElement, true);
                return accumulator;
            }) ?? -1
    );
};
