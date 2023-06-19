// Leetcode: https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

var minOperations = function (nums: Array<number>): number {
    let moves: number = 0;
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            let diff = Math.abs(nums[i] - nums[i - 1]);
            if (diff === 0) {
                diff = 1;
            } else if (diff + nums[i] === nums[i - 1]) {
                ++diff;
            }
            nums[i] += diff;
            moves += diff;
        }
    }
    return moves;
};
