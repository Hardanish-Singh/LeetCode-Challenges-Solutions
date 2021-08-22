/*
 * @param { number[] } nums
 * @return { number }
*/

/*
        SOLUTION 1: DYNAMIC PROGRAMMING, KADANE'S ALGORITHM
                        Time Complexity: O(N), where N is the length of nums.
                        Space Complexity: O(1)
*/

var maxAbsoluteSum = function( nums ) {
        let max = maxSubarray = min = minSubarray = nums[0];
        for( let i=1; i<nums.length; i++ ) {
                maxSubarray = Math.max( nums[i], nums[i] + maxSubarray );
                max = Math.max( max, maxSubarray );
                minSubarray = Math.min( nums[i], nums[i] + minSubarray );
                min = Math.min( min, minSubarray );
        }
        return Math.max(max,Math.abs(min));
};

/*
 * @param { number[] } nums
 * @return { number }
*/

var maxAbsoluteSum = function(nums) {
        if(nums.length == 1) {
                return Math.max(nums[0],Math.abs(nums[0]));
        }
        let max, maxSubarray, min, minSubarray;
        for( let i=0; i<nums.length-1; i++ ) {
                if( i==0 ) {
                        minSubarray = maxSubarray = min = max = nums[i];
                }
                maxSubarray = Math.max( nums[i+1], nums[i+1] + maxSubarray );
                max = Math.max( max, maxSubarray );
                minSubarray = Math.min( nums[i+1], nums[i+1] + minSubarray );
                min = Math.min( min, minSubarray );
        }
        return Math.max(max,Math.abs(min));
};