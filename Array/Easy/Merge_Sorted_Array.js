/*
        You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
        Merge nums1 and nums2 into a single array sorted in non-decreasing order.
        The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
        To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

        Example 1:
                Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
                Output: [1,2,2,3,5,6]
                Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
                The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
        Example 2:
                Input: nums1 = [1], m = 1, nums2 = [], n = 0
                Output: [1]
                Explanation: The arrays we are merging are [1] and [].
                The result of the merge is [1].
        Example 3:
                Input: nums1 = [0], m = 0, nums2 = [1], n = 1
                Output: [1]
                Explanation: The arrays we are merging are [] and [1].
                The result of the merge is [1].
        Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

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