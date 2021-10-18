/*
        Given a binary array nums, return the maximum number of consecutive 1's in the array.

        Example 1:
                Input: nums = [1,1,0,1,1,1]
                Output: 3
                Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
        Example 2:
                Input: nums = [1,0,1,1,0,1]
                Output: 2

        Constraints:
                1) 1 <= nums.length <= 105
                2) nums[i] is either 0 or 1.

*/

/*
 * @param { number[] } nums
 * @return { number }
*/

// SOLUTION 1
var findMaxConsecutiveOnes = function( nums ) {
        let count = 0;
        let max = 0;
        nums.push(0);
        for( let i=0; i<nums.length; i++ ){
                if( nums[i] === 1 ) {
                        count++;
                }
                else {
                        max = Math.max(count,max);
                        count = 0;
                }
        }
        return max;
};

// SOLUTION 2
var findMaxConsecutiveOnes = function( nums ) {
        let count = 0;
        let max = 0;
        for( let i=0; i<nums.length; i++ ){
                if( nums[i] === 1 ) {
                        count++;
                }
                else {
                        max = Math.max(count,max);
                        count = 0;
                }
                if( i === nums.length-1 && nums[i] === 1 ) {
                        max = Math.max(count,max);
                }
        }
        return max;
};

// SOLUTION 3
var findMaxConsecutiveOnes = function( nums ) {
        let count = 0;
        let max = 0;
        for( let i=0; i<nums.length; i++ ){
                if( nums[i] === 1 ) {
                        count++;
                }
                else {
                        max = Math.max(count,max);
                        count = 0;
                }
        }
        return Math.max(count,max);
};