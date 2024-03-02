// Leetcode: https://leetcode.com/problems/4sum-ii/

var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let hash_table = {};
    let count = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let sum = nums1[i] + nums2[j];
            sum in hash_table ? (hash_table[sum] += 1) : (hash_table[sum] = 1);
        }
    }

    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            let compliment = -(nums3[i] + nums4[j]);
            if (compliment in hash_table) {
                count += hash_table[compliment];
            }
        }
    }

    return count;
};
