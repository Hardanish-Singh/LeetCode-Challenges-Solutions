// Leetcode: https://leetcode.com/problems/intersection-of-two-arrays/

const intersection = (nums1: number[], nums2: Array<number>): Array<number> => {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const intersection_of_arrays: Array<number> = [];

    for (let i: number = 0; i < nums1.length; i++) {
        for (let j: number = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j] && !intersection_of_arrays.includes(nums1[i])) {
                intersection_of_arrays.push(nums1[i]);
            } else if (nums1[i] < nums2[j]) {
                break;
            }
        }
    }

    return intersection_of_arrays;
};
