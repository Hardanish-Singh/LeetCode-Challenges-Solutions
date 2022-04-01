/*
        A peak element is an element that is strictly greater than its neighbors.
        Given an integer array nums, find a peak element, and return its index. 
        If the array contains multiple peaks, return the index to any of the peaks.
        You may imagine that nums[-1] = nums[n] = -∞.
*/

/*
 * @param { number[] } nums
 * @return { number }
*/


var findPeakElement = function( nums ) {
        var peakElement = 0;
        for( let i = 0; i < nums.length; i++ ) {
                if( nums[ i ] > nums[ i - 1 ] && nums[ i ] > nums[ i - 1 ] ) {
                        peakElement = i;
                }
        }
        return peakElement;
};