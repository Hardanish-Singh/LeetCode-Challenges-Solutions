// Leetcode: https://leetcode.com/problems/merge-sorted-array/

const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
    var index = 0;
    for (let i: number = 0; i < nums1.length; i++) {
        if (index <= n - 1 && nums1[i] === 0) {
            nums1[i] = nums2[index++];
        }
    }
    nums1.sort((a, b) => a - b);
};
