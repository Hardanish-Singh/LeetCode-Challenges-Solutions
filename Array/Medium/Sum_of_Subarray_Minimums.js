/*
        Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. 
        Since the answer may be large, return the answer modulo 10^9 + 7.
*/

/**
 * @param { number[] } arr
 * @return { number }
*/

var sumSubarrayMins = function(array) {
        var sum = 0;
        for( let i = 0; i < array.length; i++ ) {
                let min = array[i];
                sum += min;
                for( let j = i + 1; j < array.length; j++ ) {
                        min = Math.min( min, array[j] );
                        sum += min;
                }
        }
        return sum % 1000000007;
};