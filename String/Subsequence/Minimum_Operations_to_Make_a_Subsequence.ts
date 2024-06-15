// Leetcode: https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/

// Solution 1
var minOperations = (target: number[], arr: number[]): number => {
    let n = target.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(target[i], i);
    }

    let longSubsq: number[] = [];

    for (let num of arr) {
        if (!map.has(num)) continue;

        let it = longSubsq.findIndex((index) => index >= map.get(num));

        if (it === -1) longSubsq.push(map.get(num));
        else longSubsq[it] = map.get(num);
    }

    return target.length - longSubsq.length;
};

// Solution 2
const lowerBoundBinarySearch = (arr: number[], target: number): number => {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

var minOperations = (target: number[], arr: number[]): number => {
    let n = target.length,
        ans = 0;
    let map = new Map();
    for (let i = 0; i < n; i++) map.set(target[i], i);

    let longSubsq: number[] = [];

    for (let num of arr) {
        if (!map.has(num)) continue;

        let it = lowerBoundBinarySearch(longSubsq, map.get(num));

        if (it === -1) longSubsq.push(map.get(num));
        else longSubsq[it] = map.get(num);
    }

    return target.length - longSubsq.length;
};
