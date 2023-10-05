function jump(nums: number[]): number {
        let reachable: number = 0;
        let curPosition: number = 0;
        let jumps: number = 0;
        for(let i: number = 0; i < nums.length - 1; i ++) {
            reachable = Math.max(reachable, i + nums[i]);
            if(i === curPosition) {
                curPosition = reachable;
                jumps++;
            }
        }
        return jumps;
    };