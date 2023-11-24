// Leetcode: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

/**
 * @param {number[]} arr
 * @return {boolean}
 */

const canMakeArithmeticProgression = (arr) => {
    arr.sort((a, b) => a - b);
    const commonDiff = arr[1] - arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== commonDiff) {
            return false;
        }
    }

    return true;
};
