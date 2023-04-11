// Leetcode: https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/

const countElements = (nums: number[]): number => {
        const min: number = Math.min.apply(null, nums);
        const max: number = Math.max.apply(null, nums);
        let count: number = 0;

        for (let i: number = 0; i < nums.length; i++) {
                if (nums[i] > min && nums[i] < max) {
                        count++;
                }
        }

        return count;
};
