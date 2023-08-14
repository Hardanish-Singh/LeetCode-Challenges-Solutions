// Leetcode: https://leetcode.com/problems/max-pair-sum-in-an-array/

/*
    Note: Don't fall for the test cases, you can pair any two number which have the same greater/maximum digit
          and the sum need not to be in form of 11 22 33 44 88 etc.
*/

var maxSum = function (nums: Array<number>): number {
    let max: number = -1;

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            let num1: Array<number> = nums[i].toString().split("").map(Number);
            let maxDigit1: number = Math.max.apply(null, num1);

            let num2: Array<number> = nums[j].toString().split("").map(Number);
            let maxDigit2: number = Math.max.apply(null, num2);

            // Maximum digit in both numbers are equal.
            if (maxDigit1 === maxDigit2 && nums[i] + nums[j] > max) {
                max = nums[i] + nums[j];
            }
        }
    }

    return max;
};
