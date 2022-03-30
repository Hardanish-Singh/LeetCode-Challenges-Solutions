/*
 * @param { number[] } nums
 * @return { number }
*/

var thirdMax = function( nums ) {
        nums = Array.from( new Set( nums ) );
        nums.sort( ( a, b ) => b - a );
        return nums[2] ?? nums[0];
};