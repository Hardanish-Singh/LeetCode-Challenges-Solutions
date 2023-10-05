// Leetcode: https://leetcode.com/problems/jump-game/

function canJump( nums: number[] ): boolean {
        let reachable: number = 0;
        for(let i: number = 0; i < nums.length; i ++) {
                if(i > reachable) {
                        return false;
                }
                reachable = Math.max(reachable, i + nums[i]);
        } 
        return true;
}