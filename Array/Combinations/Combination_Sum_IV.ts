// Leetcode: https://leetcode.com/problems/combination-sum-iv

// SOLUTION 1: RECURSION
var combinationSum4 = function (nums: Array<number>, target: number): number {
        let count: number = 0;
        nums.sort((a, b) => a - b);

        const permutationSum = (sum: number = 0) => {
                if (sum < 0 || sum > target) {
                        return count;
                }

                if (sum === target) {
                        count = count + 1;
                        return count;
                }

                for (let num of nums) {
                        permutationSum(sum + num);
                }
        };

        permutationSum();
        return count;
};

// SOLUTION 2: RECURSION WITH MEMOIZATION
var combinationSum4 = function (nums: Array<number>, target: number): number {
        const memo: {
                [key: number]: number;
        } = {};
        nums.sort((a, b) => a - b);

        const permutationSum = (sum: number = 0) => {
                let count: number = 0;
                if (sum < 0 || sum > target) {
                        return count;
                }

                if (sum in memo) {
                        count += memo[sum];
                        return count;
                }

                if (sum === target) {
                        count = count + 1;
                        return count;
                }

                for (const num of nums) {
                        count += permutationSum(sum + num);
                }

                memo[sum] = count;
                return count;
        };

        return permutationSum();
};
