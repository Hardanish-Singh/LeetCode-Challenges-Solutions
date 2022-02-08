/*
        Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

        Example 1:
                Input: nums = [3,2,3]
                Output: [3]

        Example 2:
                Input: nums = [1]
                Output: [1]
        
        Example 3:
                Input: nums = [1,2]
                Output: [1,2]

        Constraints:
                1) 1 <= nums.length <= 5 * 10^4
                2) -10^9 <= nums[i] <= 10^9
*/

/*
 * @param {number[]} nums
 * @return {number[]}
*/

var majorityElement = function( nums ) {
        let majority = Math.floor( nums.length / 3 );
        let numbers = {
                
        };
        let count = 0;
        let index = 0;
        let result = [];
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
                        result.push( nums[index] );
                }
        }
        return result;
};