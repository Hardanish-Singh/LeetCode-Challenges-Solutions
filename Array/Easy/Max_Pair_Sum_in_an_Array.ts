// Leetcode: https://leetcode.com/problems/max-pair-sum-in-an-array/

/*
    Note: Don't fall for the test cases, you can pair any two number which have the same greater/maximum digit and the sum need not to be in form of 11 22 33 44 88 etc.
*/

const maxSum = (nums: number[]): number => {
    let max: number = -1;

    for (let i: number = 0; i < nums.length; i++) {
        let maxDigitI: number = Math.max.apply(null, String(nums[i]).split("").map(Number));
        for (let j: number = i + 1; j < nums.length; j++) {
            let maxDigitJ: number = Math.max.apply(null, String(nums[j]).split("").map(Number));
            // Maximum digit in both numbers are equal.
            if (maxDigitI === maxDigitJ) {
                max = Math.max(max, nums[i] + nums[j]);
            }
        }
    }

    return max;
};
