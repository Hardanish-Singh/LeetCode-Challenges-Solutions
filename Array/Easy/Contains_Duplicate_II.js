/*
        Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

        Example 1:
                Input: nums = [1, 2, 3, 1], k = 3
                Output: true

        Example 2:
                Input: nums = [1, 0, 1, 1], k = 1
                Output: true

        Example 3:
                Input: nums = [1, 2, 3, 1, 2, 3], k = 2
                Output: false
 
        Constraints:
                1) 1 <= nums.length <= 10^5
                2) -10^9 <= nums[i] <= 10^9
                3) 0 <= k <= 10^5
*/

/**
 * @param { number[] } nums
 * @param { number } k
 * @return { boolean }
*/

/*
        SOLUTION 1: BRUTE FORCE
                        Time Complexity: O(n^2)
                        Space Complexity: O(1)
*/

var containsNearbyDuplicate = function( nums, k ) {
        for( let i = 0; i < nums.length - 1; i++ ) {
                for( let j = i + 1; j < nums.length; j++ ) {
                        if( nums[i] === nums[j] && Math.abs( i - j ) <= k ) {
                                return true;
                        }
                }
        }
        return false;
};

/*
        SOLUTION 2: HASH TABLE
                        Time Complexity: O(n)
                        Space Complexity: O(n)
*/

var containsNearbyDuplicate = function( nums, k ) {
        var countOccurrences = { };
        var i;
        for( i = 0; i < nums.length; i++ ) {
                if( nums[ i ] in countOccurrences ) {
                        if( Math.abs( i - countOccurrences[ nums[ i ] ] ) <= k  ) {
                                return true;
                        } else {
                                countOccurrences[ nums[ i ] ] = i;   
                        }
                } else {
                        countOccurrences[ nums[ i ] ] = i;
                }
        }
        return false;
};