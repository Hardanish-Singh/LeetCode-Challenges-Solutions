// Leetcode: https://leetcode.com/problems/maximum-subarray/

/*
        SOLUTION 1: OPTIMIZED BRUTE FORCE APPROACH
                        Time Complexity: O(N^2), where N is the length of nums.
                        Space Complexity: O(1)
*/

var maxSubArray = (nums: Array<number>): number => {
    let sum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        let temp = 0;
        for (let j = i; j < nums.length; j++) {
            temp += nums[j];
            sum = Math.max(sum, temp);
            if (temp < 0) {
                break;
            }
        }
    }
    return sum;
};

/*
        SOLUTION 2: OPTIMIZED BRUTE FORCE APPROACH
                        Time Complexity: O(N^2), where N is the length of nums.
                        Space Complexity: O(1)
*/

var maxSubArray = (nums: Array<number>): number => {
    let sum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        sum = Math.max(sum, temp);
        for (let j = i + 1; j < nums.length; j++) {
            temp += nums[j];
            sum = Math.max(sum, temp);
            if (temp < 0) {
                break;
            }
        }
    }
    return sum;
};

/*
        SOLUTION 3: DYNAMIC PROGRAMMING, KADANE'S ALGORITHM
                        Time Complexity: O(N), where N is the length of nums.
                        Space Complexity: O(1)
*/

var maxSubArray = (nums: Array<number>): number => {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        max = Math.max(max, nums[i]);
    }
    return max;
};
