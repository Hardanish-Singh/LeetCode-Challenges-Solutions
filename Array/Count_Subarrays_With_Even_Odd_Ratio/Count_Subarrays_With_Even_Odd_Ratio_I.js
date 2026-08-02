// Leetcode: https://leetcode.com/problems/count-subarrays-with-even-odd-ratio-i/

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var countRatioSubarrays = function (nums, a, b) {
    let validSubarrays = 0;

    for (let left = 0; left < nums.length; left++) {
        let evenCount = 0;
        let oddCount = 0;

        for (let right = left; right < nums.length; right++) {
            if (nums[right] % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }

            // evenCount / oddCount <= a / b
            // Cross-multiply to avoid floating-point division:
            // evenCount * b <= oddCount * a
            if (oddCount > 0 && evenCount * b <= oddCount * a) {
                validSubarrays++;
            }
        }
    }

    return validSubarrays;
};
