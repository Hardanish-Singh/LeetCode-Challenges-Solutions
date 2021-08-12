/*
        Given a sorted array of distinct integers and a target value, return the index if the target is found. 
        If not, return the index where it would be if it were inserted in order.
        
        You must write an algorithm with O(log n) runtime complexity.
        
        Example 1:
                Input: nums = [1,3,5,6], target = 5
                Output: 2
        Example 2:
                Input: nums = [1,3,5,6], target = 2
                Output: 1
        Example 3:
                Input: nums = [1,3,5,6], target = 7
                Output: 4
        Example 4:
                Input: nums = [1,3,5,6], target = 0
                Output: 0
        Example 5:
                Input: nums = [1], target = 0
                Output: 0

        Constraints:
                1) 1 <= nums.length <= 104
                2) -104 <= nums[i] <= 104
                3) nums contains distinct values sorted in ascending order.
                4) -104 <= target <= 104
*/

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