/*
        Given an array nums of size n, return the majority element.
        The majority element is the element that appears more than ⌊n / 2⌋ times. 
        You may assume that the majority element always exists in the array.

        Example 1:
                Input: nums = [3,2,3]
                Output: 3
        
        Example 2:
                Input: nums = [2,2,1,1,1,2,2]
                Output: 2

        Constraints:
                1) n == nums.length
                2) 1 <= n <= 5 * 10^4
                3) -2^31 <= nums[i] <= 2^31 - 1
*/

/*
 * @param { number[] } nums
 * @return { number }
*/

var majorityElement = function( nums ) {
        let majority = Math.floor( nums.length / 2 );
        let numbers = {
                
        };
        let count = 0;
        let index = 0;
        for( let i = 0; i < nums.length; i++ ) {
                count = 0;
                if( numbers[nums[i]] ) {
                   continue;
                }
                for( let j = i + 1; j < nums.length; j++ ){
                        if( nums[i] === nums[j] ) {
                                numbers[nums[i]] = true;
                                count++;
                        }
                }
                if( count >= majority ) {
                        index = i;
                }
        }
        return nums[index];
};