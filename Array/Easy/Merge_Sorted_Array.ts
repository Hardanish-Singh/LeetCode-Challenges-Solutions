// Leetcode: https://leetcode.com/problems/merge-sorted-array/

const merge = (nums1: Array<number>, m: number, nums2: Array<number>, n: number): Array<number> => {
        var index1 = 0;
        for (let i: number = 0; i < nums1.length; i++) {
                if (index1 <= n - 1 && nums1[i] === 0) {
                        nums1[i] = nums2[index1];
                        index1++;
                }
        }
        return nums1.sort((a, b) => a - b);
};
