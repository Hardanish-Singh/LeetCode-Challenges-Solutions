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