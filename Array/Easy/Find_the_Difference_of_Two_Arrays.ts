// Leetcode: https://leetcode.com/problems/find-the-difference-of-two-arrays/

const findDifference = (nums1: Array<number>, nums2: Array<number>): Array<Array<number>> => {
        let nums1Set: Set<number> = new Set(nums1);
        let nums2Set: Set<number> = new Set(nums2);

        let result: Array<Array<number>> = [[], []];
        for (const num of nums1Set) {
                if (!nums2Set.has(num)) result[0].push(num);
        }

        for (const num of nums2Set) {
                if (!nums1Set.has(num)) result[1].push(num);
        }

        return result;
};
