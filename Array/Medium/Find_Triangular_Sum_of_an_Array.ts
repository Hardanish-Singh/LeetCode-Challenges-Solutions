// Leetcode: https://leetcode.com/problems/find-triangular-sum-of-an-array/

const triangularSum = (nums: number[]): number => {
    if (nums.length === 1) {
        return nums[0];
    }

    const triangular: number[] = [];
    for (let i = 0; i < nums.length - 1; i++) {
        triangular[i] = (nums[i] + nums[i + 1]) % 10;
    }

    return triangularSum(triangular);
};
