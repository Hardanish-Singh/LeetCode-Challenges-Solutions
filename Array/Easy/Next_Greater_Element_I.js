/*
 * @param { number[] } nums1
 * @param { number[] } nums2
 * @return { number[] }
*/

var nextGreaterElement = function( nums1, nums2 ) {
        var hash_table = { };
        for( let i = 0; i < nums2.length; i++ ) {
                for( let j = i + 1; j < nums2.length; j++ ) {
                        if( nums2[ i ] < nums2[ j ] ) {
                                hash_table[ nums2[ i ] ] = nums2[ j ];
                                break;
                        }
                }
        }

        var result = [];
        for( let i = 0; i < nums1.length; i++ ) {
                hash_table[ nums1[ i ] ] ? result.push( hash_table[ nums1[ i ] ] ) : result.push( -1 );
        }
        return result;
};