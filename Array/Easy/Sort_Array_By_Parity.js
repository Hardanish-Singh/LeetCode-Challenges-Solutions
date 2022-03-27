/*
        Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
        Return any array that satisfies this condition.

        Example 1:
                Input: nums = [3, 1, 2, 4]
                Output: [2, 4, 3, 1]
                Explanation: The outputs [4, 2, 3, 1], [2, 4, 1, 3], and [4, 2, 1, 3] would also be accepted.

        Example 2:
                Input: nums = [0]
                Output: [0]
 
        Constraints:
                1) 1 <= nums.length <= 5000
                2) 0 <= nums[i] <= 5000
*/

/*
 * @param { number[] } nums
 * @return { number[] }
*/

var sortArrayByParity = function( nums ) {
        for( let i = 0; i < nums.length; i++ ) {
                if( nums[i] % 2 !== 0 ) {    
                        for( let j = i + 1; j < nums.length; j++ ) {
                                if( nums[j] % 2 === 0 ) {
                                        [ nums[j], nums[i] ] = [ nums[i], nums[j] ];
                                        break;
                                }
                        }
                }
        }
        return nums;
};