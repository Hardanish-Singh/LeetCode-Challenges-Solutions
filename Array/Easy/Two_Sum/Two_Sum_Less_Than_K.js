/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
*/

var twoSumLessThanK = function( nums, k ) {
        nums.sort( (a, b) => a - b );
        let leftIndex = 0;
        let rightIndex = nums.length-1;
        let max = -1;
        while( leftIndex < rightIndex ) {
                if( nums[leftIndex] + nums[rightIndex] < k) {
                        max = Math.max( max, nums[leftIndex] + nums[rightIndex] );
                        leftIndex++;
                }
                else if( nums[leftIndex] + nums[rightIndex] >= k) {
                        rightIndex--;
                }
        }
        return max;
};
