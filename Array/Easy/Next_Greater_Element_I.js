/*
        The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
        You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

        For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. 
        If there is no next greater element, then the answer for this query is -1.
*/

/*
 * @param { number[] } nums1
 * @param { number[] } nums2
 * @return { number[] }
*/

var nextGreaterElement = function( nums1, nums2 ) {
        var result = [];
        for( let i = 0; i < nums1.length; i++ ) {
                let isFound = false;
                for( let j = nums2.indexOf( nums1[ i ] ); j < nums2.length; j++ ) {
                       if( nums1[ i ] < nums2[ j ] ) {
                               isFound = true;
                               result.push( nums2[ j ] );
                               break;
                       }
                }
                if( !isFound ) {
                        result.push( -1 );
                }
        }
        return result;
};