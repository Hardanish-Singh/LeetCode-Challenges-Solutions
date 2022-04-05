/*
        There is an integer array nums sorted in ascending order (with distinct values).
        Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
        For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
        Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
        You must write an algorithm with O(log n) runtime complexity.

        Example 1:
                Input: nums = [4,5,6,7,0,1,2], target = 0
                Output: 4
        Example 2:
                Input: nums = [4,5,6,7,0,1,2], target = 3
                Output: -1
        Example 3:
                Input: nums = [1], target = 0
                Output: -1

        Constraints:
                1) 1 <= nums.length <= 5000
                2) -10^4 <= nums[i] <= 10^4
                3) All values of nums are unique.
                4) nums is an ascending array that is possibly rotated.
                5) -10^4 <= target <= 10^4
*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

var search = function(array, target) {
        
        let startIndex = 0;
        let endIndex = array.length - 1;
        while( startIndex <= endIndex ) {
                let middleIndex = Math.floor( (startIndex + endIndex) / 2 );
                if( target === array[middleIndex] ) {
                        return middleIndex;
                }
                if( array[startIndex] <= array[middleIndex] ) {
                        if( target < array[middleIndex] && target >= array[startIndex] ) {
                                endIndex = middleIndex - 1;
                        } else {
                                startIndex = middleIndex + 1
                        }
                }
                else {
                        if( target > array[middleIndex] && target <= array[endIndex] ) {
                                startIndex = middleIndex + 1;
                        } else {
                                endIndex = middleIndex - 1;
                        }
                }
        }
        return -1;
};