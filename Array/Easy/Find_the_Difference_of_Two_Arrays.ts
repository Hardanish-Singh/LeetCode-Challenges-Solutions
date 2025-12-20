// Leetcode: https://leetcode.com/problems/find-the-difference-of-two-arrays/

// Solution 1
var findDifference = (nums1: number[], nums2: number[]): number[][] => {
    const set1: Set<number> = new Set(nums1);
    const set2: Set<number> = new Set(nums2);
    const result: number[][] = [[], []];

    for (const num of set1) if (!set2.has(num)) result[0].push(num);
    for (const num of set2) if (!set1.has(num)) result[1].push(num);

    return result;
};

// Solution 2
var findDifference = (nums1: number[], nums2: number[]): number[][] => {
    const set1: Set<number> = new Set(nums1);
    const set2: Set<number> = new Set(nums2);
    // prettier-ignore
    return [
        Array.from(set1).filter(x => !set2.has(x)),
        Array.from(set2).filter(x => !set1.has(x))
    ]
};
