/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
var searchInsert = function( nums, target ) {        
        // CHECKS ARRAYS LAST ELEMENT FIRST WITH TARGET ELEMENT TO AVIOD LOOPING THROUGH ARRAY
        if( target > nums[nums.length-1]  ) {
                return nums.length;
        }
        for(let i=0; i<nums.length; i++ ) {
                if( target === nums[i] ) {
                        return i;
                }
                else if( target < nums[i] ) {
                        return i;
                }
        }
};