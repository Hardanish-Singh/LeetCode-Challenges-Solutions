// Leetcode: https://leetcode.com/problems/optimal-partition-of-string/description/

// Solution 1
var partitionString = (s: string): number => {
    const set = new Set();
    let minimumNumberOfSubstringsInAPartition = 0;

    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            set.clear();
            minimumNumberOfSubstringsInAPartition++;
        }
        if (i === s.length - 1) {
            minimumNumberOfSubstringsInAPartition++;
        }
        set.add(s[i]);
    }

    return minimumNumberOfSubstringsInAPartition;
};

// Solution 2
var partitionString = (s: string): number => {
    const set = new Set();
    return s.split("").reduce((accumulator, item, index, s) => {
        if (set.has(item)) {
            set.clear();
            accumulator++;
        }
        if (index === s.length - 1) {
            accumulator++;
        }
        set.add(item);
        return accumulator;
    }, 0);
};

// Solution 3
// @ts-ignore
var partitionString = (s: string, set = new Set()): number =>
    s.split("").reduce((accumulator, item, index, s) => {
        if (set.has(item)) {
            set.clear();
            accumulator++;
        }
        if (index === s.length - 1) {
            accumulator++;
        }
        set.add(item);
        return accumulator;
    }, 0);
