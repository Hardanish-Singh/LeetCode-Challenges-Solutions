// Leetcode: https://leetcode.com/problems/jump-game-ii/

const jump = (nums: number[]): number => {
    let reachable: number = 0;
    let curPosition: number = -1;
    let jumps: number = 0;
    for (let i: number = 0; reachable < nums.length - 1; i++) {
        if (i > curPosition) (curPosition = reachable), jumps++;
        reachable = Math.max(reachable, i + nums[i]);
    }
    return jumps;
};
