/*
        You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.
        A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
        Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.
        Each range [a,b] in the list should be output as:
*/

/**
 * @param { number[] } nums
 * @param { number } lower
 * @param { number } upper
 * @return { string[] }
*/


var findMissingRanges = function( nums, lower, upper ) {
        if( ! ( nums.includes( lower ) ) ) {
                nums.push( lower - 1 );
        }
        if( ! ( nums.includes( upper ) ) ) {
                nums.push( upper + 1 );
        }
        // SORT AGAIN FOR NEGATIVE NUMBERS
        nums.sort( ( a,b) => a-b );
        
        let result = [];
        for( let i = 0; i < nums.length - 1; i++ ) {
                let prev = nums[ i ] + 1;
                let current = nums[ i + 1 ] - 1;
                if( prev > current ) {
                        continue;
                }
                if( prev === current ) {
                        result.push( String( prev ) );
                } else {
                        result.push( String( prev ) + "->" + String( current ) );
                }
        }
        return result;
};

