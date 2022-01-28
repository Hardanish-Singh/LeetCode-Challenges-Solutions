/*
        Given an integer array nums where every element appears three times except for one, which appears exactly once. 
        Find the single element and return it.
        You must implement a solution with a linear runtime complexity and use only constant extra space.

        Example 1:
                Input: nums = [2,2,3,2]
                Output: 3
        Example 2:
                Input: nums = [0,1,0,1,0,1,99]
                Output: 99

        Constraints:
                1) 1 <= nums.length <= 3 * 10^4
                2) -2^31 <= nums[i] <= 2^31 - 1
                3) Each element in nums appears exactly three times except for one element which appears once.
*/

/*
 * @param { number[] } nums
 * @return { number }
*/

var singleNumber = function(nums) {
        let numbers = {
                
        };
        let isFound = false;
        for( let i = 0; i < nums.length; i++ ) {
                isFound = false;
                if( numbers[nums[i]] ) {
                   continue;
                }
                for( let j = i + 1; j < nums.length; j++ ){
                        if( nums[i] == nums[j] ) {
                                numbers[nums[i]] = true;
                                isFound = true;
                                break;
                        }
                } 
                if( isFound == false ) {
                        return nums[i];
                }
        }
};