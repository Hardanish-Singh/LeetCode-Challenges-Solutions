// Leetcode: https://leetcode.com/problems/sort-colors/

const sortColors = (nums: number[]): void => {
    let red = 0;
    let white = 0;
    let blue = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            red++;
        } else if (nums[i] == 1) {
            white++;
        } else if (nums[i] == 2) {
            blue++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i < red) nums[i] = 0;
        else if (i < red + white) nums[i] = 1;
        else if (i < red + white + blue) nums[i] = 2;
    }
};
