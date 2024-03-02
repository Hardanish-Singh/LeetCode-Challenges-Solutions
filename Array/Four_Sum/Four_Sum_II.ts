// Leetcode: https://leetcode.com/problems/4sum-ii/

const fourSumCount = (nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number => {
    let map = new Map<number, number>();
    let count = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let sum = nums1[i] + nums2[j];
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }

    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            let compliment = -(nums3[i] + nums4[j]);
            if (map.has(compliment)) {
                count += map.get(compliment) as number;
            }
        }
    }

    return count;
};
