// Leetcode: https://leetcode.com/problems/optimal-partition-of-string/description/

/**
 * @param { string } s
 * @return { number }
 */

const partitionString = (s) => {
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
