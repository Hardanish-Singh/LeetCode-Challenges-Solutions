// Leetcode: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

// Solution 1 (Brute Force (TLE))
var replaceElements = (arr: number[]): number[] =>
    arr.reduce((accumulator: number[], _, currentIndex: number, arr: number[]) => {
        accumulator[currentIndex] = Math.max(...arr.slice(currentIndex + 1), -1);
        return accumulator;
    }, []);

// Solution 2 (Brute Force (TLE))
var replaceElements = (arr: number[]): number[] =>
    arr.reduceRight((accumulator: number[], _, currentIndex: number, arr: number[]) => {
        accumulator[currentIndex] = Math.max(...arr.slice(currentIndex + 1), -1);
        return accumulator;
    }, []);

// Solution 3 (Optimized)
var replaceElements = (arr: number[]): number[] => {
    const n = arr.length;
    // const result = new Array(n).fill(-1);
    // const result: number[] = Array.from({ length: n }, () => 1);
    const result = Array.from({ length: n }).fill(1) as number[];
    let maxRight = -1;

    for (let i = n - 1; i >= 0; i--) {
        result[i] = maxRight;
        maxRight = Math.max(maxRight, arr[i]);
    }

    return result;
};
