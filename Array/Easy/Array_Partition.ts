// Leetcode: https://leetcode.com/problems/array-partition/

const arrayPairSum = (nums: Array<number>): number => {
        nums.sort((a, b) => a - b);
        let sum: number = 0;
        for (let i: number = 0; i < nums.length; i += 2) {
                sum += nums[i];
        }
        return sum;
};
