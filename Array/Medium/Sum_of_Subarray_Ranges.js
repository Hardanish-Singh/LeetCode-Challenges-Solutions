/*
        You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.
        Return the sum of all subarray ranges of nums.
        A subarray is a contiguous non-empty sequence of elements within an array.

        Example 1:
                Input: nums = [1, 2, 3]
                Output: 4
                Explanation: 
                        The 6 subarrays of nums are the following:
                                [1], range = largest - smallest = 1 - 1 = 0 
                                [2], range = 2 - 2 = 0
                                [3], range = 3 - 3 = 0
                                [1,2], range = 2 - 1 = 1
                                [2,3], range = 3 - 2 = 1
                                [1,2,3], range = 3 - 1 = 2
                                So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.
*/

/**
 * @param { number[] } nums
 * @return { number }
*/

var subArrayRanges = function( array ) {
        var sum = 0;
        for( let i = 0; i < array.length; i++ ) {
                let min = array[i];
                let max = array[i];
                for( let j = i + 1; j < array.length; j++ ) {
                        min = Math.min( min, array[j] );
                        max = Math.max( max, array[j] );
                        sum += ( max - min );
                }
        }
        return sum;
};