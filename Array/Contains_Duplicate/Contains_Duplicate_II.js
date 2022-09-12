// Leetcode: https://leetcode.com/problems/contains-duplicate-ii/

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
        let countOccurrences = { };
        for( let i = 0; i < nums.length; i++ ) {
                if( nums[ i ] in countOccurrences && Math.abs( i - countOccurrences[ nums[ i ] ] ) <= k ) {
                        return true;
                } else {
                        countOccurrences[ nums[ i ] ] = i;
                }
        }
        return false;
};