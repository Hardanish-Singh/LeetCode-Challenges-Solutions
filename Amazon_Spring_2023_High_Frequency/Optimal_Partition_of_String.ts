// Leetcode: https://leetcode.com/problems/optimal-partition-of-string/description/

const partitionString = (s: string): number => {
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
