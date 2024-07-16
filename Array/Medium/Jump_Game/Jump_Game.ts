// Leetcode: https://leetcode.com/problems/jump-game/

// Solution 1
var canJump = (nums: number[]): boolean => {
    let reachable: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        if (i > reachable) {
            return false;
        }
        reachable = Math.max(reachable, i + nums[i]);
    }
    return true;
};

// Solution 2
var canJump = (nums: number[]): boolean =>
    nums.length > 1
        ? nums.reduce((accumulator: any, num: number, index: number) => {
              if (index > accumulator) {
                  return false;
              }
              accumulator = Math.max(accumulator, index + nums[index]);
              return accumulator;
          }, 0)
        : true;
