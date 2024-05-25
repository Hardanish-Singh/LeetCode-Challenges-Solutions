// Leetcode: https://leetcode.com/problems/maximum-product-of-three-numbers/

const maximumProduct = (nums: number[]): number => {
    //sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Calculate the product of the three largest elements
    const n = nums.length;
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

    // Calculate the product of the two smallest elements and the largest element
    const product2 = nums[0] * nums[1] * nums[n - 1];

    // Return the maximum of the two products
    return Math.max(product1, product2);
};
