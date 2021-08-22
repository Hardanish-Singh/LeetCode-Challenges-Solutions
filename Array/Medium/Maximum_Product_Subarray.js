/*
        Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
        It is guaranteed that the answer will fit in a 32-bit integer.
        A subarray is a contiguous subsequence of the array.

        Example 1:
                Input: nums = [2,3,-2,4]
                Output: 6
                Explanation: [2,3] has the largest product 6.

        Example 2:
                Input: nums = [-2,0,-1]
                Output: 0
                Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 
        Constraints:

                1) 1 <= nums.length <= 2 * 10^4
                2) -10 <= nums[i] <= 10
                3) The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

/*
        SOLUTION 1: BRUTE FORCE APPROACH
                        Time Complexity: O(N^2), where N is the length of nums.
                        Space Complexity: O(1)
*/

/*
 * @param { number[] } nums
 * @return { number }
*/
 var maxProduct = function(nums) {
        let sum = -11;
        let temp = 0;
        for( let i=0; i<nums.length; i++ ) {
                temp = nums[i];
                for( let j=i+1; j<nums.length; j++ ) {
                        temp *= nums[j];
                        if( temp >= sum  ) {
                                sum = temp;    
                        }      
                }
                if( nums[i] > sum ) {
                        sum = nums[i];
                }
        }
        return sum;
};

/*
        SOLUTION 2: DYNAMIC PROGRAMMING
                        Time Complexity: O(N), where N is the length of nums.
                        Space Complexity: O(1)
*/

/*
 * @param { number[] } nums
 * @return { number }
*/
var maxProduct = function( nums ) {
        if( nums.length === 0 ) {
                return 0;
        }
        
        let max = min = result = nums[0];
        
        for( let i=1; i<nums.length; i++ ){
                let temp_max = Math.max( nums[i], Math.max( nums[i] * max, nums[i] * min ) );
                let temp_min = Math.min( nums[i], Math.min( nums[i] * max, nums[i] * min ) );
                max = temp_max;
                min = temp_min;
                result = Math.max(max, min, result);
        }
        return result;
};