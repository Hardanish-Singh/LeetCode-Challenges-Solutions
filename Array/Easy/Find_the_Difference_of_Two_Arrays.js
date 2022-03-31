/*
        Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
                1) answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
                2) answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
        Note that the integers in the lists may be returned in any order.

        Example 1:
                Input: nums1 = [1, 2, 3], nums2 = [2, 4, 6]
                Output: [ [1, 3], [4, 6] ]
        
        Example 2:
                Input: nums1 = [1, 2, 3, 3], nums2 = [1, 1, 2, 2]
                Output: [ [3], [] ]
        
        Constraints:
                1) 1 <= nums1.length, nums2.length <= 1000
                2) -1000 <= nums1[i], nums2[i] <= 1000
*/

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