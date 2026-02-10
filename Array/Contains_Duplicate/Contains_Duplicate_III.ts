// Leetcode: https://leetcode.com/problems/contains-duplicate-iii/

var containsNearbyAlmostDuplicate = (nums: number[], indexDiff: number, valueDiff: number): boolean => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= valueDiff && Math.abs(i - j) <= indexDiff) {
                return true;
            }
        }
    }
    return false;
};
