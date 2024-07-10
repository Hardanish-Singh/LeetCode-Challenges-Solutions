// Leetcode: https://leetcode.com/problems/wiggle-sort-ii/

const wiggleSort = (nums: number[]): void => {
    const reversedItems = [...nums].sort((a, b) => b - a);
    let index = 0;
    // First start filling the array from odd positions considering starting index as 0
    for (let i = 1; i < nums.length; i += 2) {
        nums[i] = reversedItems[index++];
    }
    // Now fill the even positions
    for (let i = 0; i < nums.length; i += 2) {
        nums[i] = reversedItems[index++];
    }
};
