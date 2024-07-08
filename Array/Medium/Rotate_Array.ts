// Leetcode: https://leetcode.com/problems/rotate-array/

var rotate = (nums: number[], k: number): void => {
    k %= nums.length;
    let rotatedArray = [...nums.slice(nums.length - k), ...nums.slice(0, nums.length - k)];
    for (let i = 0; i < rotatedArray.length; i++) {
        nums[i] = rotatedArray[i];
    }
};
