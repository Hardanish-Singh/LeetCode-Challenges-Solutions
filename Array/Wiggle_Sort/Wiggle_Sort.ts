// Leetcode: https://leetcode.com/problems/wiggle-sort/

const wiggleSort = (nums: number[]): void => {
    nums.sort((a, b) => a - b);
    let mid = 1;
    while (mid <= nums.length - 2) {
        nums.splice(mid, 0, nums.pop()!);
        mid += 2;
    }
};
