// Leetcode: https://leetcode.com/problems/range-addition/

const getModifiedArray = (length: number, updates: number[][]): number[] => {
    const result = new Array(length).fill(0);
    for (const update of updates) {
        const [start, end, inc] = update;
        for (let i = start; i <= end; i++) {
            result[i] += inc;
        }
    }
    return result;
};
