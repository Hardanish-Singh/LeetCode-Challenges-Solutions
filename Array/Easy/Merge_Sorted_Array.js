/*
 * @param { number[] } nums1
 * @param { number } m
 * @param { number[] } nums2
 * @param { number } n
 * @return { void } Do not return anything, modify nums1 in-place instead.
*/

var merge = function( nums1, m, nums2, n ) {
        let sorted_array = [];

        for( let i=0; i<m; i++ ) {
                sorted_array.push( nums1[i] );
        }

        for( let i=0; i<n; i++ ) {
                sorted_array.push( nums2[i] );
        }
        
        sorted_array.sort( ( num1, num2 ) => num1 - num2 );
        for( let i=0; i<sorted_array.length; i++ ){
                nums1[i] = sorted_array[i];
        }
        
        return nums1;
};