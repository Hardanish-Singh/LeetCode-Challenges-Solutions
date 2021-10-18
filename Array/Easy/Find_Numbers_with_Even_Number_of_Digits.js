/*
 * @param {number[]} nums
 * @return {number}
*/
var findNumbers = function( nums ) {
        let count = 0;
        for( let i=0; i<nums.length; i++ ) {
                if( String( nums[i] ).length % 2 === 0 ) {
                        count++;
                }
        }
        return count;
};