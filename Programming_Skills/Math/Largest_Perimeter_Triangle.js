// Leetcode: https://leetcode.com/problems/largest-perimeter-triangle/

/**
 * @param {number[]} nums
 * @return {number}
 */

const largestPerimeter = (nums) => {
    // Sort in DESC order
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length; i++) {
        // Decalre the three sides of the triangle
        let side1 = nums[i];
        let side2 = nums[i + 1];
        let side3 = nums[i + 2];
        // Perform the check depending on the rule
        if (side1 < side2 + side3) {
            return side1 + side2 + side3;
        }
    }

    // If we cannot form a triangle, we return 0
    return 0;
};
