/*
        Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

        Example 1:
                Input: nums = [1, 0, 1, 1, 0]
                Output: 4
                Explanation: Flip the first zero will get the maximum number of consecutive 1's. After flipping, the maximum number of consecutive 1's is 4.

        Example 2:
                Input: nums = [1, 0, 1, 1 ,0, 1]
                Output: 4

        Constraints:
                1) 1 <= nums.length <= 10^5
                2) nums[i] is either 0 or 1.
*/

/*
 * @param { number[] } nums
 * @return { number }
*/

var findMaxConsecutiveOnes = function(nums) {
        var count = 0;
        var maxConsecutiveOnes = 0;
        for( let i = 0; i < nums.length; i++ ) {
                if( nums[i] ) {
                        count++; 
                } else {
                        count++;
                        let j = i + 1;
                        while( nums[j++] ) {
                                count++;
                        }
                        maxConsecutiveOnes = Math.max( count, maxConsecutiveOnes );
                        count = 0;
                }
        }
        if( count > 0 ) {
                maxConsecutiveOnes = Math.max( count, maxConsecutiveOnes );
        }
        return maxConsecutiveOnes;
};