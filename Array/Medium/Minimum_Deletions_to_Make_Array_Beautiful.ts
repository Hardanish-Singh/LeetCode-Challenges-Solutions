// Leetcode: https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/

var minDeletion = (nums: number[]): number => {
    let deletions = 0;

    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] === nums[i + 1]) {
            i--;
            deletions++;
        }
    }

    return (nums.length - deletions) % 2 !== 0 ? deletions + 1 : deletions;
};
