// Leetcode: https://leetcode.com/problems/rotate-array/

const rotate = (nums: number[], k: number): void => {
    k %= nums.length;
    const rotatedArray = [...nums.slice(nums.length - k), ...nums.slice(0, nums.length - k)];
    for (let i = 0; i < rotatedArray.length; i++) {
        nums[i] = rotatedArray[i];
    }
};
