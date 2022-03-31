/*
 * @param { number[] } nums1
 * @param { number[] } nums2
 * @return { number[][] }
*/

var differentElements = function( array1, array2 ) {
        var temp = [];
        for( let i = 0; i < array1.length; i++ ) {
                if( array1[i] === array1[i-1] ) {
                        continue;
                }
                for( let j = 0; j < array2.length; j++ ) {
                        if( array2[j] > array1[i] ) {
                                temp.push( array1[i] );
                                break;
                        }
                        else if( array2[j] === array1[i] ) {
                                break;
                        }
                        if( j == array2.length - 1 ) {
                                temp.push( array1[i] );
                        }
                }
        }
        return temp;
}

var findDifference = function( nums1, nums2 ) {
        nums1.sort( ( a, b ) => a - b );
        nums2.sort( ( a, b ) => a - b );
        var result = [];
        
        result.push( differentElements( nums1, nums2 ) );
        result.push( differentElements( nums2, nums1 ) );
        
        return result;
};