/*
        Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

        Example 1:
                Input: nums = [1, 2, 3, 1], k = 3, t = 0
                Output: true
        
        Example 2:
                Input: nums = [1, 0, 1, 1], k = 1, t = 2
                Output: true
        
        Example 3:
                Input: nums = [1, 5, 9, 1, 5, 9], k = 2, t = 3
                Output: false
*/

/*
 * @param { number[] } nums
 * @param { number } k
 * @param { number } t
 * @return { boolean }
*/

var containsNearbyAlmostDuplicate = function( nums, k, t ) {
        for( let i = 0; i < nums.length - 1; i++ ) {
                for( let j = i + 1; j < nums.length; j++ ) {
                        if( Math.abs( nums[ i ] - nums[ j ] ) <= t && Math.abs( i - j ) <= k ) {
                                return true;
                        }
                }
        }
        return false;
};