/*
        Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. 
        Find the two elements that appear only once. You can return the answer in any order.
        You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

        Example 1:
                Input: nums = [1,2,1,3,2,5]
                Output: [3,5]
                Explanation:  [5, 3] is also a valid answer.
        Example 2:
                Input: nums = [-1,0]
                Output: [-1,0]
        Example 3:
                Input: nums = [0,1]
                Output: [1,0]

        Constraints:
                1) 2 <= nums.length <= 3 * 10^4
                2) -2^31 <= nums[i] <= 2^31 - 1
                3) Each integer in nums will appear twice, only two integers will appear once.
*/

/*
 * @param { number[] } nums
 * @return { number[] }
*/

var singleNumber = function(nums) {
        let numbers = {
                
        };
        let isFound = false;
        let result = [];
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
                        result.push( nums[i] );
                }
        }   
        return result;
};