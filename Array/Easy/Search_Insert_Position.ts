// Leetcode: https://leetcode.com/problems/search-insert-position/

// Solution 1 (Linear search)
var searchInsert = (nums: number[], target: number): number => {
    // CHECKS ARRAYS LAST ELEMENT FIRST WITH TARGET ELEMENT TO AVIOD LOOPING THROUGH ARRAY
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i;
        } else if (target < nums[i]) {
            return i;
        }
    }
    return -1;
};

// Solution 2 (Binary search)
var searchInsert = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
