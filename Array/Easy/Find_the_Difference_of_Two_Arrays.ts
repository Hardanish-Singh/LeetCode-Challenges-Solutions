// Leetcode: https://leetcode.com/problems/find-the-difference-of-two-arrays/

const findDifference = (nums1: number[], nums2: number[]): number[][] => {
    let set1: Set<number> = new Set(nums1);
    let set2: Set<number> = new Set(nums2);
    let result: number[][] = [[], []];

    for (const num of set1) if (!set2.has(num)) result[0].push(num);
    for (const num of set2) if (!set1.has(num)) result[1].push(num);

    return result;
};
