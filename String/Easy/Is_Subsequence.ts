// Leetcode: https://leetcode.com/problems/is-subsequence/

// Solution 1
var isSubsequence = (source: string, target: string): boolean => {
    let leftPointer1 = 0;
    let leftPointer2 = 0;

    //The iteration would terminate, when either of the pointers exceeds its boundary.
    while (leftPointer1 < source.length && leftPointer2 < target.length) {
        // we found a match. Hence, we move both pointers one step forward.
        if (source[leftPointer1] === target[leftPointer2]) {
            leftPointer1++;
            leftPointer2++;
        }
        // no match is found. We then move only the right pointer on the target string.
        else {
            leftPointer2++;
        }
    }
    // At the end of the iteration, the result solely depends on the fact that whether we have consumed all the characters in the source string.
    return leftPointer1 === source.length;
};

// Solution 2
var isSubsequence = (source: string, target: string): boolean => {
    let index = -1;
    for (const s of source) {
        index = target.indexOf(s, index + 1);
        if (index == -1) {
            return false;
        }
    }
    return true;
};
