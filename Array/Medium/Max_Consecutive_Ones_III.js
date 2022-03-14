/*
        Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

        Example 1:
                Input: nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2
                Output: 6
        Example 2:
                Input: nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 3
                Output: 10

        Constraints:
                1) 1 <= nums.length <= 10^5
                2) nums[i] is either 0 or 1.
                3) 0 <= k <= nums.length
*/

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/

var longestOnes = function( nums, k ) {
        var count = 0;
        var maxConsecutiveOnes = 0;
        var temp = 0;
        for( let i = 0; i < nums.length; i++ ) {
                if( nums[i] ) {
                        count++; 
                } else {
                        let j = i;
                        while( j != nums.length ) {
                                if( temp === k && nums[j] === 0 ) {
                                        break;
                                }
                                else if( nums[j] === 0 ) {
                                        temp++;
                                }
                                count++;
                                j++;
                        }
                        maxConsecutiveOnes = Math.max( count, maxConsecutiveOnes );
                        temp = 0;
                        count = 0;
                }
        }
        if( count > 0 ) {
                maxConsecutiveOnes = Math.max( count, maxConsecutiveOnes );
        }
        return maxConsecutiveOnes;
};