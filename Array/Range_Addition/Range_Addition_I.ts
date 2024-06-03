// Leetcode: https://leetcode.com/problems/range-addition/

// Solution 1
var getModifiedArray = (length: number, updates: number[][]): number[] => {
    const result = new Array(length).fill(0);
    for (const update of updates) {
        const [start, end, inc] = update;
        for (let i = start; i <= end; i++) {
            result[i] += inc;
        }
    }
    return result;
};

// Solution 2
var getModifiedArray = (length: number, updates: number[][]): number[] =>
    updates.reduce((accumulator, [start, end, inc]) => {
        for (let i = start; i <= end; i++) {
            accumulator[i] += inc;
        }
        return accumulator;
    }, new Array(length).fill(0));
