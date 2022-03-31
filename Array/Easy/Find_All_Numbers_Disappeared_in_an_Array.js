/*
        Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

        Example 1:
                Input: nums = [4, 3, 2, 7, 8, 2, 3, 1]
                Output: [5, 6]
        
        Example 2:
                Input: nums = [1, 1]
                Output: [2]

        Constraints:
                1) n == nums.length
                2) 1 <= n <= 10^5
                3) 1 <= nums[i] <= n

*/

/*
 * @param { number[] } nums
 * @return { number[] }
*/

var findDisappearedNumbers = function(nums) {
        var result = [];
        var hash_table = { };
        for( let i = 0; i < nums.length; i++ ) {
                if( hash_table[ nums[i] ] ) {
                        continue;
                } else {
                        hash_table[ nums[i] ] = true;
                }
        }
        for( let i = 1; i <= nums.length; i++ ) {
                if( ! ( hash_table[ i ] ) ) {
                        result.push( i );
                }
        }
        return result;
};