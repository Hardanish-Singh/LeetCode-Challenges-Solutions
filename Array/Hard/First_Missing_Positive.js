/*
        Given an unsorted integer array nums, return the smallest missing positive integer.
        You must implement an algorithm that runs in O(n) time and uses constant extra space.

        Example 1:
                Input: nums = [1,2,0]
                Output: 3
        Example 2:
                Input: nums = [3,4,-1,1]
                Output: 2
        Example 3:
                Input: nums = [7,8,9,11,12]
                Output: 1

        Constraints:
                1) 1 <= nums.length <= 5 * 10^5
                2) -2^31 <= nums[i] <= 2^31 - 1
*/

/*
 * @param { number[] } nums
 * @return { number }
*/

var firstMissingPositive = function(nums) {
	
        let hash_table = {};
	
	for( let i = 0; i < nums.length; i++ ) {
                if( hash_table[nums[i]] ) {
                        continue;
                }
                else {
                        hash_table[nums[i]] = true;
                }
	}
        
        i = 1;
	while( true ) {
                if( !hash_table[i] ) {
                        return i;
                }
                i++;  
        }

};