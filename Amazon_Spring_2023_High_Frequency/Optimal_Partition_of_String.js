// Leetcode: https://leetcode.com/problems/optimal-partition-of-string/description/

/*
    Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. 
    That is, no letter appears in a single substring more than once.

    Return the minimum number of substrings in such a partition.

    Note that each character should belong to exactly one substring in a partition.

    Example 1:
        Input: s = "abacaba"
        Output: 4
        Explanation: Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba"). It can be shown that 4 is the minimum number of substrings needed.
    
    Example 2:
        Input: s = "ssssss"
        Output: 6
        Explanation: The only valid partition is ("s","s","s","s","s","s").
    
    Constraints:
        1) 1 <= s.length <= 105
        2) s consists of only English lowercase letters.
*/

/**
 * @param { string } s
 * @return { number }
 */

var partitionString = function(s) {
    const set = new Set();
    let minimumNumberOfSubstringsInAPartition = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(set.has(s[i])) {
            set.clear();
            minimumNumberOfSubstringsInAPartition++;
        }
        if(i === s.length - 1) {
            minimumNumberOfSubstringsInAPartition++;
        }
        set.add(s[i]);
    }

    return minimumNumberOfSubstringsInAPartition;
};
