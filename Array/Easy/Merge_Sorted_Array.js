/*
 * @param { number[] } nums1
 * @param { number } m
 * @param { number[] } nums2
 * @param { number } n
 * @return { void } Do not return anything, modify nums1 in-place instead.
*/

//SOLUTION 1
var merge = function( nums1, m, nums2, n ) {
        let sorted_array = [];

        for( let i=0; i<m; i++ ) {
                sorted_array.push( nums1[i] );
        }

        for( let i=0; i<n; i++ ) {
                sorted_array.push( nums2[i] );
        }
        
        sorted_array.sort( ( num1, num2 ) => num1 - num2 );
        for( let i=0; i<sorted_array.length; i++ ) {
                nums1[i] = sorted_array[i];
        }
        
        return nums1;
};

//SOLUTION 2
var merge = function( nums1, m, nums2, n ) {
        
        for( let i=m; i>=0; i-- ) {
                if( nums1[i] === 0 ) {
                        nums1.splice( i, 1 );
                        i++;
                }
                else {
                        break;
                }
        }
        
        for( let i=n; i>=0; i-- ) {
                if( nums2[i] === 0 ) {
                        nums2.splice( i, 1 );
                        i++;
                }
                else {
                        break;
                }
        }
        
        for( let i=0; i<n; i++ ) {
                nums1.push( nums2[i] );
        }
        
        nums1.sort( ( num1, num2 ) => num1 - num2 );
        
        return nums1;
};