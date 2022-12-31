// Leetcode: https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param { number[] } nums
 * @returns { number }
 */

function findDuplicate(nums: number[]): number {
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
                if (nums[i] === nums[i + 1]) {
                        return nums[i];
                }
        }
}
