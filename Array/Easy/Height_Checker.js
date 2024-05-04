// Leetcode: https://leetcode.com/problems/height-checker/

/**
 * @param {number[]} heights
 * @return {number}
 */

const heightChecker = (heights) =>
    heights.toSorted((a, b) => a - b).filter((height, i) => height !== heights[i]).length;
