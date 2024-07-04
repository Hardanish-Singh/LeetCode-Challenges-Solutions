// Leetcode: https://leetcode.com/problems/sum-of-subarray-ranges/

const subArrayRanges = (array: number[]): number => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        let max = array[i];
        for (let j = i + 1; j < array.length; j++) {
            min = Math.min(min, array[j]);
            max = Math.max(max, array[j]);
            sum += max - min;
        }
    }
    return sum;
};
