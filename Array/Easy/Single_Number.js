/*
        Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
        You must implement a solution with a linear runtime complexity and use only constant extra space.

        Example 1:
                Input: nums = [2,2,1]
                Output: 1
        Example 2:
                Input: nums = [4,1,2,1,2]
                Output: 4
        Example 3:
                Input: nums = [1]
                Output: 1

        Constraints:
                1) 1 <= nums.length <= 3 * 10^4
                2) -3 * 10^4 <= nums[i] <= 3 * 10^4
                3) Each element in the array appears twice except for one element which appears only once.
*/

/*
 * @param { number[] } nums
 * @return { number }
*/

var singleNumber = function( nums ) {
        let numbers = {
                
        };
        let isFound = false;
        for( let i = 0; i < nums.length; i++ ) {
                isFound = false;
                if( numbers[nums[i]] ) {
                   continue;
                }
                for( let j = i + 1; j < nums.length; j++ ){
                        if( nums[i] === nums[j] ) {
                                numbers[nums[i]] = true;
                                isFound = true;
                                break;
                        }
                } 
                if( isFound === false ) {
                        return nums[i];
                }
        }   
};