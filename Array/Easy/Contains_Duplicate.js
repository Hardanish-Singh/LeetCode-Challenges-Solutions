// Leetcode: https://leetcode.com/problems/contains-duplicate/

/**
 * @param { number[] } nums
 * @return { boolean }
*/

var containsDuplicate = function( nums ) {
        let countOccurrences = { };
        for( let i = 0; i < nums.length; i++ ) {
                if( countOccurrences[ nums[ i ] ] ) {
                        return true;
                }
                countOccurrences[ nums[ i ] ] = true;
        }
        return false;
};