// Leetcode: https://leetcode.com/problems/intersection-of-two-arrays/

/*
 * @param { number[] } nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function (nums1, nums2) {
        nums1.sort((a, b) => a - b);
        nums2.sort((a, b) => a - b);
        let intersection_of_arrays = [];
        for (let i = 0; i < nums1.length; i++) {
                for (let j = 0; j < nums2.length; j++) {
                        if (nums1[i] === nums2[j] && !intersection_of_arrays.includes(nums1[i])) {
                                intersection_of_arrays.push(nums1[i]);
                        } else if (nums1[i] < nums2[j]) {
                                break;
                        }
                }
        }
        return intersection_of_arrays;
};
