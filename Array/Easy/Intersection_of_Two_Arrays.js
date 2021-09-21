/*
        Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
        Example 1:
                Input: nums1 = [1,2,2,1], nums2 = [2,2]
                Output: [2]
        Example 2:
                Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
                Output: [9,4]
                Explanation: [4,9] is also accepted.
        Constraints:
                1) 1 <= nums1.length, nums2.length <= 1000
                2) 0 <= nums1[i], nums2[i] <= 1000
*/
/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
*/
var intersection = function( nums1, nums2 ) {
        nums1.sort( (a, b) => a - b );
        nums2.sort( (a, b) => a - b );
        let intersection_of_arrays = [];
        for( let i=0; i<nums1.length; i++ ) {
                for( let j=0; j<nums2.length; j++ ) {
                        if( nums1[i] === nums2[j] && !( intersection_of_arrays.includes( nums1[i] ) ) ) {
                                intersection_of_arrays.push(nums1[i]);
                        }
                        else if( nums1[i] < nums2[j] ){
                                break;
                        }
                }
        }
        return intersection_of_arrays;
};