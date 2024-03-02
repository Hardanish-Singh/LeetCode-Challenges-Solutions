// Leetcode: https://leetcode.com/problems/4sum-ii/

const fourSumCount = (nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number => {
    let hash_table = {};
    let count = 0;

    for (let i: number = 0; i < nums1.length; i++) {
        for (let j: number = 0; j < nums2.length; j++) {
            let sum: number = nums1[i] + nums2[j];
            sum in hash_table ? (hash_table[sum] += 1) : (hash_table[sum] = 1);
        }
    }

    for (let i: number = 0; i < nums3.length; i++) {
        for (let j: number = 0; j < nums4.length; j++) {
            let compliment: number = -(nums3[i] + nums4[j]);
            if (compliment in hash_table) {
                count += hash_table[compliment];
            }
        }
    }

    return count;
};
