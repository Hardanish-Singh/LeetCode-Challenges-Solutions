// Leetcode: https://leetcode.com/problems/jump-game-iii/

function canReach(arr: number[], start: number): boolean {
    const seen: Set<number> = new Set();
    const stack: Array<number> = [start];
    
    while (stack.length) {
        const curr = stack.pop() as number;
        
        if (arr[curr] === 0) {
            return true;
        }
        
        seen.add(curr);
        
        const next: number = curr + arr[curr];
        const prev: number = curr - arr[curr];
        
        if (next < arr.length && !seen.has(next)) {
            stack.push(next);
        }
        
        if (prev >= 0 && !seen.has(prev)) {
            stack.push(prev);
        }
    }
    
    return false;
};