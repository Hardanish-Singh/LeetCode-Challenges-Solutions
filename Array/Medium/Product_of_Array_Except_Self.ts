// Leetcode: https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = (nums: number[]): number[] => {
    let product = nums.reduce((a, b) => a * b, 1);
    return nums.map((num, index) =>
        num != 0 ? product / num : [...nums.slice(0, index), ...nums.slice(index + 1)].reduce((a, b) => a * b, 1)
    );
};
