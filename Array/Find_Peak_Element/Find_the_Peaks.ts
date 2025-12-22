// Leetcode: https://leetcode.com/problems/find-the-peaks/
// Solution 1
var findPeaks = (mountain: number[]): number[] =>
    mountain.reduce((accumulator: number[], currentValue, index, mountain) => {
        if (
            index !== 0 &&
            index !== mountain.length - 1 &&
            currentValue > mountain[index - 1] &&
            currentValue > mountain[index + 1]
        ) {
            accumulator.push(index);
        }
        return accumulator;
    }, []);

// Solution 2
var findPeaks = (mountain: number[]): number[] =>
    mountain.reduce((accumulator: number[], currentValue, index, mountain) => {
        if (currentValue > mountain[index - 1] && currentValue > mountain[index + 1]) {
            accumulator.push(index);
        }
        return accumulator;
    }, []);
