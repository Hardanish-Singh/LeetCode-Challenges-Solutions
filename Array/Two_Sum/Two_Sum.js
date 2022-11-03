// Leetcode: https://leetcode.com/problems/two-sum/

/*
        SOLUTION 1: BRUTE FORCE
                Time Complexity: O( n ^ 2 )
                Space Complexity: O( n )
*/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number[] }
 */

var twoSum = function (nums, target) {
        for (let i = 0; i < nums.length; i++) {
                for (let j = i + 1; j < nums.length; j++) {
                        if (nums[i] + nums[j] === target) {
                                return [i, j];
                        }
                }
        }
};

/*
        SOLUTION 2: USING HASH TABLE
                Time Complexity: O( n )
                Space Complexity: O( n )
*/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number[] }
 */

var twoSum = function (nums, target) {
        let hash_table = {};
        for (let i = 0; i < nums.length; i++) {
                let difference = target - nums[i];
                if (difference in hash_table) {
                        return [hash_table[difference], i];
                }
                hash_table[nums[i]] = i;
        }
};
