// Leetcode: https://leetcode.com/problems/combination-sum-iv

/**
 *
 * @param { number[] } nums
 * @param { number } target
 * @returns { number }
 */

// SOLUTION 1: RECURSION
var combinationSum4 = function (nums, target) {
        let count = 0;
        nums.sort((a, b) => a - b);

        function permutationSum(sum = 0) {
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
        }

        permutationSum();
        return count;
};

/**
 *
 * @param { number[] } nums
 * @param { number } target
 * @returns { number }
 */

// SOLUTION 2: RECURSION WITH MEMOIZATION
var combinationSum4 = function (nums, target) {
        const memo = {};
        nums.sort((a, b) => a - b);

        function permutationSum(sum = 0) {
                let count = 0;
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
        }

        return permutationSum();
};
