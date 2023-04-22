// Leetcode: https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = (nums1: Array<number>, nums2: Array<number>): Array<number> => {
        if (nums2.length > nums1.length) {
                return intersect(nums2, nums1);
        }
        nums1.sort((a, b) => a - b);
        nums2.sort((a, b) => a - b);

        var commonElements: Array<number> = [];
        var isIncluded: {
                [key: number]: boolean;
        } = {};

        for (let i = 0; i < nums1.length; i++) {
                for (let j = 0; j < nums2.length; j++) {
                        if (!isIncluded[j] && nums1[i] === nums2[j]) {
                                commonElements.push(nums1[i]);
                                isIncluded[j] = true;
                                break;
                        } else if (nums2[j] > nums1[i]) {
                                break;
                        }
                }
        }

        return commonElements;
};
