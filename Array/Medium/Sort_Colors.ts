// Leetcode: https://leetcode.com/problems/sort-colors/

/**
 * @param { number[]} nums
 * @return { void }
 */

function sortColors(nums: number[]): void {
        let red = 0;
        let white = 0;
        let blue = 0;

        for (let i = 0; i < nums.length; i++) {
                if (nums[i] == 0) {
                        red++;
                } else if (nums[i] == 1) {
                        white++;
                } else if (nums[i] == 2) {
                        blue++;
                }
        }

        for (let i = 0; i < red; i++) {
                nums[i] = 0;
        }
        for (let i = 0; i < white; i++) {
                nums[red + i] = 1;
        }
        for (let i = 0; i < blue; i++) {
                nums[red + white + i] = 2;
        }
}
