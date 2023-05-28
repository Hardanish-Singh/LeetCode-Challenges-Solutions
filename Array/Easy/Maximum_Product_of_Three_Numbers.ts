// Leetcode: https://leetcode.com/problems/maximum-product-of-three-numbers/

const maximumProduct = (nums: Array<number>): number => {
        nums.sort((a, b) => a - b);
        /*
                It could also be possible that two negative numbers lying at the left extreme end 
                could also contribute to lead to a larger product if the third number in the triplet 
                being considered is the largest positive number in the nums array.
        */
        let firstHalf = nums[0] * nums[1] * nums[nums.length - 1];
        /*
                Another solution could be to sort the given numsnums array(in ascending order) and find out the product of the last three numbers.
        */
        let lastHalf = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
        return Math.max(firstHalf, lastHalf);
};
