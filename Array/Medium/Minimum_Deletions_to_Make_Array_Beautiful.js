// Leetcode: https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/

/**
 * @param { number[] } nums
 * @return { number }
 */

var minDeletion = function (nums) {
        var count = 0;

        for (let i = 0; i < nums.length; i++) {
                if (i % 2 === 0 && nums[i] === nums[i + 1]) {
                        // We can use either splice or shift, but I prefer to use shift because of better performance.
                        // nums.splice( i, 1 );
                        nums.shift();
                        i--;
                        count++;
                }
        }

        return nums.length % 2 !== 0 ? count + 1 : count;
};
